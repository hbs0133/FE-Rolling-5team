import React, { useState, useEffect } from "react";
import PostStyles from "./PostPage.module.scss";
import Button from "../../components/UI/Button/Button";
import check from "../../assets/images/check.svg";
import { useNavigate } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import FileInPut from "./FileInPut";
import { getUnsplashApi, postRecipients } from "../../services/api";
import refresh_icon from "../../assets/images/refresh_icon.png";

const UNSPLASH_ACCESS_KEY = "lJoYj2iVWVrNUCyhYho73MymgSAVemOjwtd_Wo_AhIU";

const PostPage = () => {
  const navigate = useNavigate();
  const [isColorSelected, setIsColorSelected] = useState(true);
  const [selectedColor, setSelectedColor] = useState("beige");
  const [inputError, setInputError] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const response = await getUnsplashApi(UNSPLASH_ACCESS_KEY);
      setImages(response);
      console.log(response);
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
        type="button"
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
  const getFormData = (e) => {
    return {
      team: "7-5",
      name: e.target.name.value,
      backgroundColor: selectedColor,
      backgroundImageURL: isColorSelected
        ? null
        : images[selectedImage].urls.full,
    };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = getFormData(e);
    console.log("FormData:", formData);

    try {
      const result = await postRecipients(formData);
      navigate("/list");
      console.log("메시지 생성 결과:", result);
    } catch (error) {
      console.error("메시지 생성에 실패했습니다:", error.message);
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
              type="button"
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
          <FileInPut
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            setSelectedColor={setSelectedColor}
          />
        )}
        <Button className={PostStyles["created-button"]} disable={!!inputError}>
          생성하기
        </Button>
      </form>
    </div>
  );
};

export default PostPage;
