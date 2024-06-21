import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../PutMessagePage.module.scss";
import InputSection from "../InputSection/InputSection.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import ProfileImageInput from "../ProfileImageInput/ProfileImageInput.jsx";
import DropDown from "../DropDown/DropDown.jsx";
import TextEditor from "../TextEditor/TextEditor.jsx";
import Card from "../PreviewCard/PreviewCard.jsx";
import Modal from "../Modal/Modal.jsx";
import {
  getRecipientRollingPaper,
  getMessage,
  putMessage,
} from "../../../../services/api.js";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../../../services/firebase";
import defaultProfileImage from "../../../../assets/images/profile_image_default.jpg";

const INITIAL_TEAM = "7-5";

const INITIAL_PROFILEIMAGEURL =
  "https://firebasestorage.googleapis.com/v0/b/fe-rolling-5team.appspot.com/o/files%2FFrame%202593.jpg?alt=media&token=c03d4b94-79e3-43d3-be7f-79409a51248d";

const INITIAL_VALUES = {
  team: INITIAL_TEAM,
  recipientId: 0,
  sender: "",
  profileImageURL: INITIAL_PROFILEIMAGEURL,
  relationship: "지인",
  content: "",
  font: "Noto Sans",
};

const relationshipList = ["친구", "지인", "동료", "가족"];
const fontList = ["Noto Sans", "Pretendard", "나눔명조", "나눔손글씨 손편지체"];

const PutMessageForm = ({ id }) => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [previewProfileImage, setPreviewProfileImage] =
    useState(defaultProfileImage);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [isUpLoadImage, setIsUpLoadImage] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (valueName, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [valueName]: value,
    }));
  };

  const onImageChange = async () => {
    const file = profileImageFile;
    if (!file) {
      setIsUpLoadImage(true);
      return null;
    }

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file);

    try {
      const snapshot = await uploadTask;
      const downloadURL = await getDownloadURL(snapshot.ref);
      handleChange("profileImageURL", downloadURL);
      setIsUpLoadImage(true);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleLoadRecipientName = async (id) => {
    try {
      const recipient = await getRecipientRollingPaper({ id: id });
      const recipientName = recipient.name;
      setRecipientName(recipientName);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMessage = async (id) => {
    try {
      const message = await getMessage({ id: id });
      setValues(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await putMessage(
        {
          ...values,
          recipientId: Number(values.recipientId),
          team: INITIAL_TEAM,
        },
        id
      );
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    navigate(`/post/${values.recipientId}`);
  };

  useEffect(() => {
    handleLoadMessage(id);
  }, [id]);

  useEffect(() => {
    if (values.recipientId !== 0) {
      handleLoadRecipientName(values.recipientId);
    }
  }, [values.recipientId]);

  useEffect(() => {
    setPreviewProfileImage(values.profileImageURL);
  }, [values.profileImageURL]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputSection
        label={"From."}
        inputElement={
          <TextInput
            valueName={"sender"}
            value={values.sender}
            onChange={handleChange}
            placeholder={"이름을 입력해주세요."}
          />
        }
      />
      <InputSection
        label={"프로필 이미지"}
        inputElement={
          <ProfileImageInput
            valueName={"profileImageURL"}
            value={values.profileImageURL}
            onChange={handleChange}
            previewProfileImage={previewProfileImage}
            setPreviewProfileImage={setPreviewProfileImage}
            setProfileImageFile={setProfileImageFile}
          />
        }
      />
      <InputSection
        label={"상대와의 관계"}
        inputElement={
          <DropDown
            valueName={"relationship"}
            value={values.relationship}
            onChange={handleChange}
            list={relationshipList}
          />
        }
      />
      <InputSection
        label={"내용을 입력해 주세요"}
        inputElement={
          <TextEditor
            valueName={"content"}
            value={values.content}
            onChange={handleChange}
          />
        }
      />
      <InputSection
        label={"폰트 선택"}
        inputElement={
          <DropDown
            valueName={"font"}
            value={values.font}
            onChange={handleChange}
            list={fontList}
          />
        }
      />
      <InputSection
        label={"메시지 미리보기"}
        inputElement={
          <Card message={values} previewProfileImage={previewProfileImage} />
        }
      />
      <Modal
        value={values}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
        recipientName={recipientName}
        previewProfileImage={previewProfileImage}
        onImageChange={onImageChange}
        isUpLoadImage={isUpLoadImage}
      />
      {submittingError?.message && <div>{setIsSubmitting.message}</div>}
    </form>
  );
};

export default PutMessageForm;
