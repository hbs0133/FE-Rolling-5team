import { useEffect, useRef, useState } from "react";
import styles from "../../PostMessagePage.module.scss";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const defaultProfileImage =
  "https://firebasestorage.googleapis.com/v0/b/fe-rolling-5team.appspot.com/o/files%2FFrame%202593.jpg?alt=media&token=c03d4b94-79e3-43d3-be7f-79409a51248d";

const ProfileImageInput = ({ valueName, value, onChange }) => {
  const [previewProfileImage, setPreviewProfileImage] =
    useState(defaultProfileImage);

  const fileInputRef = useRef();

  const uploadImage = () => {
    const onImageChange = (e) => {
      e.preventDefault();
      const file = e.target.files;
      if (!file) return null;

      const storageRef = ref(storage, `files/${file[0].name}`);
      const uploadTask = uploadBytes(storageRef, file[0]);

      uploadTask.then((snapshot) => {
        e.target.value = "";
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("파일주소", downloadURL);
          setPreviewProfileImage(downloadURL);
          onChange(valueName, downloadURL);
        });
      });
    };
    const fileInputNode = fileInputRef.current;
    if (fileInputNode) {
      fileInputNode.addEventListener("change", onImageChange);
    }
  };

  useEffect(() => {
    uploadImage();
  }, [value]);

  // const handleChange = (e) => {
  //   const nextValue = e.target.files[0];
  //   if (nextValue) {
  //     const imageUrl = URL.createObjectURL(nextValue);
  //     setPreviewProfileImage(imageUrl);
  //   }
  // };
  const handleAddProfileImage = () => {
    const fileInputNode = fileInputRef.current;
    if (fileInputNode) {
      fileInputNode.click();
    }
  };

  const handleClearProfileImage = () => {
    setPreviewProfileImage(defaultProfileImage);
    onChange(valueName, defaultProfileImage);
    const fileInputNode = fileInputRef.current;
    if (!fileInputNode) return;
    fileInputNode.value = "";
  };

  // useEffect(() => {
  //   if (!value || value === defaultProfileImage) {
  //     setPreviewProfileImage(defaultProfileImage);
  //     return;
  //   }
  //   const nextProfileImage = URL.createObjectURL(value);
  //   setPreviewProfileImage(nextProfileImage);
  //   return () => {
  //     setPreviewProfileImage(null);
  //     URL.revokeObjectURL(nextProfileImage);
  //   };
  // }, [value]);

  return (
    <>
      <label className={styles["profile-preview"]} htmlFor="profileImageURL">
        <img
          className={styles["profile-preview-image"]}
          src={previewProfileImage}
          alt="메시지 등록 페이지에 클릭하여 변경을 할수있는 선택된 프로필 이미지 "
        />
        {value && value !== defaultProfileImage ? (
          <button
            type="button"
            className={styles["profile-image-button"]}
            onClick={handleClearProfileImage}
          >
            -
          </button>
        ) : (
          <button
            type="button"
            className={styles["profile-image-button"]}
            onClick={handleAddProfileImage}
          >
            +
          </button>
        )}
      </label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="profileImageURL"
        name="profileImageURL"
        ref={fileInputRef}
      />
    </>
  );
};

export default ProfileImageInput;
