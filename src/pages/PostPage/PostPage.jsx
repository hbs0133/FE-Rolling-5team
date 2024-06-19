import React, { useState, useEffect } from "react";
import PostStyles from "./PostPage.module.scss";
import Button from "../../components/UI/Button/Button";
import check from "../../assets/images/check.svg";
import { Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import FileInPut from "./FileInPut";
import { getUnsplashApi, postRecipients } from "../../services/api";
import refresh_icon from "../../assets/images/refresh_icon.png";

const UNSPLASH_ACCESS_KEY = "PxXlIIhqHg1pMTeViyHt7ScyMtz-bcPXMFq0AyHx8po";

const PostPage = () => {
  const [isColorSelected, setIsColorSelected] = useState(true);
  const [selectedColor, setSelectedColor] = useState("beige");
  const [inputError, setInputError] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await getUnsplashApi(UNSPLASH_ACCESS_KEY);
      const data = await response.json();
      setImages(data);
      console.log(data);
    } catch (error) {
      console.error("Unsplash에서 이미지를 가져오는 중 오류 발생:", error);
    } finally {
      setIsLoading(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      team: "7-5",
      name: e.target.name.value, // 서버에서 요구하는 필드명으로 수정
      backgroundColor: selectedColor, // 서버에서 요구하는 필드명으로 수정
      backgroundImageURL:"",
    };
    console.log("FormData:", formData); // formData 확인

    try {
      const result = await postRecipients(formData);
      console.log("메시지 생성 결과:", result);
      // 성공적으로 처리되었을 때 추가적인 로직 작성
    } catch (error) {
      console.error("메시지 생성에 실패했습니다:", error.message);
      // 오류 처리 로직 추가
    }
  };

  return (
    <div className={PostStyles.postpage}>
      <form onSubmit={handleSubmit}>
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
            required
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
          {!isColorSelected && (
            <button
              className={PostStyles["image-button"]}
              onClick={fetchImages}
            >
              <img
                src={refresh_icon}
                alt="새로고침"
                width="30px"
                height="30px"
                className={isLoading ? PostStyles.rotating : ""}
              />
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

        <Link to="/">
          <Button
            className={PostStyles["created-button"]}
            disable={!!inputError}
          >
            생성하기
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default PostPage;
