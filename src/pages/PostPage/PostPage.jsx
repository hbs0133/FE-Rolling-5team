import React, { useState } from "react";
import PostStyles from "./PostPage.module.scss";
import Button from "../../components/UI/Button/Button";
import check from "../../assets/images/cheack.svg";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import FileInPut from "./FileInPut";

const PostPage = () => {
  const [isColorSelected, setIsColorSelected] = useState(true);
  const [selectedColor, setSelectedColor] = useState("beige");
  const [inputError, setInputError] = useState("");

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
      <ToggleButton isColorSelected={isColorSelected} onToggle={handleToggle} />
      {isColorSelected ? (
        <ul className={PostStyles["color-wrapper"]}>
          {["beige", "purple", "blue", "green"].map((colorName) =>
            renderColorButton(colorName)
          )}
        </ul>
      ) : (
        <FileInPut />
      )}

      <Button className={PostStyles["created-button"]} disable={true}>
        <Link to="post/{id}">생성하기</Link>
      </Button>
    </div>
  );
};

export default PostPage;
