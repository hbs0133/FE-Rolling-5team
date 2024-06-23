import { useEffect, useRef } from "react";
import styles from "../../PutMessagePage.module.scss";
import plusIcon from "../../../../assets/icons/icon_plus.svg";
import minusIcon from "../../../../assets/icons/icon_minus.svg";
import manProfile from "../../../../assets/images/profile_man.png";
import woManProfile from "../../../../assets/images/profile_woman.png";
import defaultProfileImage from "../../../../assets/images/profile_image_default.jpg";

const defaultProfileImageURL =
  "https://firebasestorage.googleapis.com/v0/b/fe-rolling-5team.appspot.com/o/files%2FFrame%202593.jpg?alt=media&token=c03d4b94-79e3-43d3-be7f-79409a51248d";
const manProfileURL =
  "https://firebasestorage.googleapis.com/v0/b/fe-rolling-5team.appspot.com/o/files%2Fprofile_man.png?alt=media&token=150ac2ff-007b-4515-b3d4-e98fd66eaaaa";
const woManProfileURL =
  "https://firebasestorage.googleapis.com/v0/b/fe-rolling-5team.appspot.com/o/files%2Fprofile_woman.png?alt=media&token=f1a64e36-8917-421d-aa9b-6eec0d2c87f1";

const ProfileImageInput = ({
  valueName,
  onChange,
  setProfileImageFile,
  previewProfileImage,
  setPreviewProfileImage,
}) => {
  const fileInputRef = useRef();

  const handleChangePreviewProfileImage = (e) => {
    const nextValue = e.target.files[0];
    if (nextValue) {
      const nextPreviewProfileImage = URL.createObjectURL(nextValue);
      setPreviewProfileImage(nextPreviewProfileImage);
      setProfileImageFile(nextValue);
    }
  };

  const handleClickGenderImage = (value, genderImg) => {
    onChange(valueName, value);
    setPreviewProfileImage(genderImg);
  };

  const handleAddProfileImage = () => {
    const fileInputNode = fileInputRef.current;
    if (fileInputNode) {
      fileInputNode.click();
    }
  };

  const handleClearProfileImage = () => {
    setPreviewProfileImage(defaultProfileImage);
    onChange(valueName, defaultProfileImageURL);
    const fileInputNode = fileInputRef.current;
    if (!fileInputNode) return;
    fileInputNode.value = "";
  };

  useEffect(() => {
    return () => {
      if (previewProfileImage) {
        URL.revokeObjectURL(previewProfileImage);
      }
    };
  }, [previewProfileImage]);

  return (
    <>
      <div className={styles["profile-preview-wrapper"]}>
        <label className={styles["profile-preview"]} htmlFor="profileImageURL">
          <img
            className={styles["profile-preview-image"]}
            src={previewProfileImage}
            alt="메시지 등록 페이지에 클릭하여 변경을 할수있는 선택된 프로필 이미지 "
          />
          {previewProfileImage &&
          previewProfileImage !== defaultProfileImage ? (
            <button
              type="button"
              className={styles["profile-image-button"]}
              onClick={handleClearProfileImage}
            >
              <img
                src={minusIcon}
                alt="프로필사진을 기본값으로 변경하는 마이너스모양의 아이콘"
              />
            </button>
          ) : (
            <button
              type="button"
              className={styles["profile-image-button"]}
              onClick={handleAddProfileImage}
            >
              <img
                src={plusIcon}
                alt="프로필사진 변경을 위해 파일찾아보기를 하는 플러스모양의 아이콘"
              />
            </button>
          )}
        </label>
        <div className={styles["profile-image-pickker-container"]}>
          <p>프로필 이미지를 선택해주세요!</p>
          <div className={styles["profile-image-pickker"]}>
            <button
              type="button"
              onClick={() => handleClickGenderImage(manProfileURL, manProfile)}
            >
              <img
                src={manProfile}
                alt="프로필 선택을 할수있는 기본 남자프로필 이미지"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                handleClickGenderImage(woManProfileURL, woManProfile)
              }
            >
              <img
                src={woManProfile}
                alt="프로필 선택을 할수있는 기본 여자프로필 이미지"
              />
            </button>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        id="profileImageURL"
        name="profileImageURL"
        onChange={handleChangePreviewProfileImage}
        ref={fileInputRef}
      />
    </>
  );
};

export default ProfileImageInput;
