import React, { useEffect, useRef, useState } from "react";
import dropDownStyles from "./DropDown.module.scss";
import styles from "../../PutMessagePage.module.scss";
import arrowIcon from "../../../../assets/icons/arrow_bottom.svg";

const DropDown = ({ valueName, value, onChange, list }) => {
  const [dropDownVisibility, setDropDownVisibility] = useState(false);
  const [visibilityAnimation, setVisibilityAnimation] = useState(false);
  const [repeat, setRepeat] = useState(null);

  const dropdownRef = useRef(null);

  const handleChange = (value) => {
    onChange(valueName, value);
    setDropDownVisibility(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropDownVisibility(false);
    }
  };

  useEffect(() => {
    if (dropDownVisibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 600)
      );
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropDownVisibility]);

  const getFontFamily = (font) => {
    let fontFamily;
    if (font === "Noto Sans") {
      fontFamily = "notoSans";
    }
    if (font === "Pretendard") {
      fontFamily = null;
    }
    if (font === "나눔명조") {
      fontFamily = "nanumMyeongjo";
    }
    if (font === "나눔손글씨 손편지체") {
      fontFamily = "handletter";
    }
    return fontFamily;
  };

  return (
    <div className={dropDownStyles["drop-down"]} ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => setDropDownVisibility(!dropDownVisibility)}
        className={`${dropDownStyles["drop-down-button"]} ${
          dropDownVisibility && dropDownStyles.open
        } ${dropDownStyles[`${getFontFamily(value)}`]}`}
      >
        {value}
        <img
          className={`${
            dropDownVisibility
              ? dropDownStyles["up-arrow-icon"]
              : dropDownStyles["down-arrow-icon"]
          }`}
          src={arrowIcon}
          alt="드롭다운 메뉴의 화살표모양 아이콘"
        />
      </button>
      {visibilityAnimation && (
        <div
          className={`${dropDownStyles["drop-down-list"]} ${
            dropDownVisibility
              ? dropDownStyles["slide-fade-in-dropdown"]
              : dropDownStyles["slide-fade-out-dropdown"]
          }`}
        >
          <ul>
            {list.map((item, index) => (
              <li
                className={dropDownStyles[`${getFontFamily(item)}`]}
                key={index}
                onClick={() => handleChange(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
