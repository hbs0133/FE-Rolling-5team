import React from "react";
import PostStyles from "./PostPage.module.scss";

const ToggleButton = ({ isColorSelected, onToggle }) => {
  return (
    <div>
      <div className={PostStyles["toggle-wrapper"]}>
        <button
          type="button"
          className={`${PostStyles["toggle-button"]} ${
            isColorSelected ? "" : PostStyles["toggle-disabled"]
          }`}
          onClick={() => onToggle(true)}
        >
          컬러
        </button>
        <button
          type="button"
          className={`${PostStyles["toggle-button"]} ${
            !isColorSelected ? "" : PostStyles["toggle-disabled"]
          }`}
          onClick={() => onToggle(false)}
        >
          이미지
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
