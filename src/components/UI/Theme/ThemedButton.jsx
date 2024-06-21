import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemedButton.scss";

const ThemedButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <button className="theme-button" onClick={toggleTheme}>
        임시 테마
      </button>
    </>
  );
};

export default ThemedButton;
