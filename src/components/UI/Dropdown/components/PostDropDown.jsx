import Dropdown from "../Dropdown";
import React, { useState } from "react";
import postDropDownStyles from "./PostDropDown.module.scss";
import arrowBottom from "../../../../assets/icons/arrow_bottom.svg";
import arrowTop from "../../../../assets/icons/arrow_top.svg";
import { useTheme } from "../../Context/ThemeContext";

function PostDropDown({
  trigger = "",
  items = null,
  children = null,
  onSelect = () => {},
  textDrop = false,
  triggerClassName = "",
  menuClassName = "",
  itemClassName = "",
  ...rest
}) {
  const [selectedItem, setSelectedItem] = useState(trigger);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
  };

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  const renderTrigger = () => {
    return (
      <>
        <span className={postDropDownStyles["trigger-name"]}>
          {selectedItem}
        </span>
        <img src={isOpen ? arrowTop : arrowBottom} alt="Dropdown" />
      </>
    );
  };

  return (
    <Dropdown
      trigger={renderTrigger()}
      items={items}
      onSelect={handleSelect}
      textDrop={textDrop}
      triggerClassName={`${triggerClassName} ${postDropDownStyles.trigger} ${
        isOpen ? postDropDownStyles["open-trigger"] : ""
      }`}
      menuClassName={`${menuClassName} ${postDropDownStyles.menu}`}
      itemClassName={`${itemClassName} ${postDropDownStyles.item}`}
      onToggle={handleToggle}
      {...rest}
    ></Dropdown>
  );
}

export default PostDropDown;
