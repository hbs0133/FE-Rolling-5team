import React, { useState, useEffect } from "react";
import PostStyles from "./PostPage.module.scss";
import Button from "../../components/UI/Button/Button";
import check from "../../assets/images/check.svg";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import FileInPut from "./FileInPut";
import { getUnsplashApi } from "../../services/api";
import refresh_icon from "../../assets/images/refresh_icon.png";

const UNSPLASH_ACCESS_KEY = "PxXlIIhqHg1pMTeViyHt7ScyMtz-bcPXMFq0AyHx8po";

const PostPage = () => {
  const [isColorSelected, setIsColorSelected] = useState(true);
  const [selectedColor, setSelectedColor] = useState("beige");
  const [inputError, setInputError] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await getUnsplashApi(UNSPLASH_ACCESS_KEY);
      setImages(response);
      console.log(response);
    } catch (error) {
      console.error("Unsplash에서 이미지를 가져오는 중 오류 발생:", error);
    }
  };

  const handleBlur = (e) => {
    const name = e.target.value;
    if (name === "") {
      setInputError("값을 입력해 주세요.");
    } else {
      setInputError("");
    }
  };

  const handleToggle = (isColor) => {
    setIsColorSelected(isColor);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };
  const renderColorButton = (colorName) => {
    return (
      <button
        key={colorName}
        className={`${PostStyles["color-button"]} ${PostStyles[colorName]}`}
        onClick={() => handleColorSelect(colorName)}
      >
        {selectedColor === colorName && (
          <img
            src={check}
            alt="이미지 선택"
            className={PostStyles.check}
            width="44"
            height="44"
          />
        )}
      </button>
    );
  };

  return (
    <div className={PostStyles.postpage}>
      <div className={PostStyles["label-input"]}>
        <label htmlFor="name" className={PostStyles.label}>
          To.
        </label>
        <input
          id="name"
          className={`${PostStyles["input-name"]} ${
            inputError ? PostStyles["input-error"] : ""
          }`}
          placeholder="받는 사람 이름을 입력해 주세요"
          type="text"
          onBlur={handleBlur}
        />
        {inputError && <span className={PostStyles.error}>{inputError}</span>}
      </div>
      <div className={PostStyles["color-image"]}>
        <h1 className={PostStyles.h1}>배경화면을 선택해 주세요.</h1>
        <span className={PostStyles["choose-color"]}>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </span>
      </div>
      <div className={PostStyles["button-wrapper"]}>
        <ToggleButton
          isColorSelected={isColorSelected}
          onToggle={handleToggle}
        />
        {isColorSelected === false && (
          <button className={PostStyles["image-button"]} onClick={fetchImages}>
            <img src={refresh_icon} alt="새로고침" width="30px" height="30px" />
          </button>
        )}
      </div>
      {isColorSelected ? (
        <div className={PostStyles["color-wrapper"]}>
          {["beige", "purple", "blue", "green"].map((colorName) =>
            renderColorButton(colorName)
          )}
        </div>
      ) : (
        <FileInPut images={images} />
      )}

      <Link to="post/{id}">
        <Button className={PostStyles["created-button"]} disable={!!inputError}>
          생성하기
        </Button>
      </Link>
    </div>
  );
};

export default PostPage;
