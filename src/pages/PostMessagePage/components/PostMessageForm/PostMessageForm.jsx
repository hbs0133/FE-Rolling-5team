import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMessage } from "../../../../services/api.js";
import styles from "../../PostMessagePage.module.scss";
import InputSection from "../InputSection/InputSection.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import ProfileImageInput from "../ProfileImageInput/ProfileImageInput";
import DropDown from "../DropDown/DropDown.jsx";
import TextEditor from "../TextEditor/TextEditor";
import Button from "../../../../components/UI/Button/Button";
import Card from "../Card/Card.jsx";

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

const PostMessageForm = ({ id }) => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (valueName, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [valueName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleChange("recipientId", id);
    try {
      setIsSubmitting(true);
      await postMessage(values);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    setValues(INITIAL_VALUES);
    navigate(`/post/${id}`);
  };

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
        inputElement={<Card message={values} />}
      />
      <Button
        widthMax={true}
        disable={
          values.sender && values.content && !isSubmitting ? false : true
        }
        className={styles.button}
      >
        {"생성하기"}
      </Button>
      {submittingError?.message && <div>{setIsSubmitting.message}</div>}
    </form>
  );
};

export default PostMessageForm;
