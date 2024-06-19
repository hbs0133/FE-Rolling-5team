import React, { useEffect, useRef, useState } from "react";
import dropDownStyles from "./DropDown.module.scss";
import styles from "../../PostMessagePage.module.scss";
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
    if (font === "Pretendard") {
      return null;
    }
    if (font === "에스코어 드림") {
      return "sCoreDream";
    }
    if (font === "온글잎 주리손편지") {
      return "Ownglyph";
    }
    if (font === "망고보드 별별체") {
      return "mangoByeolbyeol";
    }
  };

  return (
    <div className={dropDownStyles["drop-down"]} ref={dropdownRef}>
      <button
        type="button"
        onClick={(e) => setDropDownVisibility(!dropDownVisibility)}
        className={`${dropDownStyles["drop-down-button"]} ${
          dropDownVisibility && dropDownStyles.open
        } ${styles[`${getFontFamily(value)}`]}`}
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
                className={styles[`${getFontFamily(item)}`]}
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
