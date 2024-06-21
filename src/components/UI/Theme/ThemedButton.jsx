import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemedButton.scss";
import sunImage from "../../../assets/icons/sun.svg";
import moonImage from "../../../assets/icons/moon.svg";

const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={`switch ${theme}-theme`} onClick={toggleTheme}>
      <div className="circle">
        <div className="circle-in"></div>
      </div>
      <div className="theme-button">
        {theme === "dark" ? (
          <img className="button-image" src={moonImage} alt="낮 테마로 변경" />
        ) : (
          <img className="button-image" src={sunImage} alt="밤 테마 변경" />
        )}
      </div>
    </button>
  );
};

export default ThemedButton;
