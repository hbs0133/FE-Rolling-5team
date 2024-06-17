import React, { useEffect, useState } from "react";
import PostStyles from "./PostPage.module.scss";
import plus from "../../assets/images/plus.svg";
import beige from "../../assets/images/beige_pattern.svg";

const FileInPut = () => {
  const [currentImage, setCurrentImage] = useState();
  const [previewImage, setPreviewImage] = useState();

  useEffect(() => {
    if (!currentImage) return;

    const objectURL = URL.createObjectURL(currentImage);
    setPreviewImage(objectURL);

    return () => {
      setPreviewImage();
      URL.revokeObjectURL(objectURL);
    };
  }, [currentImage]);

  const fileChange = (e) => {
    const file = e.target.files(0);
    if (file) {
      setCurrentImage(file);
    } else {
      setCurrentImage(null);
    }
  };
  return (
    <div>
      <ul className={PostStyles["image-wrapper"]}>
        <button className={PostStyles["color-button"]}>
          <img src={beige} />
        </button>
        <button className={PostStyles["color-button"]}>
          <img src={beige} />
        </button>
        <button className={PostStyles["color-button"]}>
          <img src={beige} />
        </button>

        <div className={PostStyles["file-input"]}>
          <label>
            <img
              src={plus}
              alt="이미지 등록"
              className={PostStyles["upload-icon"]}
              width="40"
              height="40"
            />
            <span className={PostStyles["upload-text"]}>이미지 등록</span>
          <input
            className={PostStyles["custom-file-input"]}
            type="file"
            onChange={fileChange}
          />
          </label>
        </div>
      </ul>
    </div>
  );
};

export default FileInPut;
