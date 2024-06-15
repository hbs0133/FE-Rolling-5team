//import React, { useState } from "react";
import Dropdown from "../Dropdown";
import shareImage from "../../../../assets/icons/ic_share.svg";
//import shareDropdownStyles from "./ShareDropdown.module.scss";

const ShareDropdown = () => {
  const menuItems = ["카카오톡 공유", "URL 공유"];
  //  const [selectedItem, setSelectedItem] = useState("");

  const handleSelect = (item) => {
    //    setSelectedItem(item);
    console.log(item);
  };
  return (
    <Dropdown
      trigger={<img src={shareImage} alt="외부링크 공유" />}
      items={menuItems}
      onSelect={handleSelect}
    ></Dropdown>
  );
};

export default ShareDropdown;
