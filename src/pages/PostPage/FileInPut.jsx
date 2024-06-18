import React, { useState, useEffect } from "react";
import axios from "axios";
import PostStyles from "./PostPage.module.scss";
import plus from "../../assets/images/plus.svg";

const UNSPLASH_ACCESS_KEY = "PxXlIIhqHg1pMTeViyHt7ScyMtz-bcPXMFq0AyHx8po";

const FileInPut = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    // Unsplash API에서 이미지를 가져오는 함수
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=10&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        setImages(response.data);
      } catch (error) {
        console.error("Unsplash에서 이미지를 가져오는 중 오류 발생:", error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!currentImage) return;

    const objectURL = URL.createObjectURL(currentImage);
    setPreviewImage(objectURL);

    return () => {
      URL.revokeObjectURL(objectURL);
    };
  }, [currentImage]);

  const fileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCurrentImage(file);
    } else {
      setCurrentImage(null);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <ul className={PostStyles["image-wrapper"]}>
        {images.map((image) => (
          <button
            key={image.id}
            className={PostStyles["color-button"]}
            onClick={() => handleImageClick(image.urls.small)}
          >
            <img src={image.urls.small} alt={image.alt_description} />
          </button>
        ))}
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
      {selectedImage && (
        <div>
          <h3>선택한 이미지</h3>
          <img src={selectedImage} alt="선택한 이미지" />
        </div>
      )}
      {previewImage && (
        <div>
          <h3>업로드한 이미지</h3>
          <img src={previewImage} alt="업로드한 이미지" />
        </div>
      )}
    </div>
  );
};

export default FileInPut;

