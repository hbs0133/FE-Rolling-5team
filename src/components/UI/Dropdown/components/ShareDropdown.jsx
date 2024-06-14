import React from "react";
import Dropdown from "../Dropdown";
import shareImage from "../../../../assets/icons/ic_share.svg";
import ShareDropdownStyles from "./ShareDropdown.module.scss";

const ShareDropdown = () => {
  return (
    <Dropdown
      trigger={
        <button>
          <img src={shareImage} alt="외부링크 공유" />
        </button>
      }
    >
      <div className={ShareDropdownStyles["link-container"]}>
        <div className={ShareDropdownStyles["first-link"]}>카카오톡 공유</div>
        <div className={ShareDropdownStyles["second-link"]}>URL 공유</div>
      </div>
    </Dropdown>
  );
};

export default ShareDropdown;
