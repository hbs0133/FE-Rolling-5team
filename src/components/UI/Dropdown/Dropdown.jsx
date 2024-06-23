import React, { useRef, useState, useEffect } from "react";
import DropdownStyles from "./Dropdown.module.scss";
import useClickOutside from "../../../hooks/useClickOutside";
import { useTheme } from "../Theme/ThemeContext";

const Dropdown = ({
  trigger = "",
  items = null,
  children = null,
  onSelect = () => {},
  textDrop = false,
  triggerClassName = "",
  menuClassName = "",
  itemClassName = "",
  onToggle = () => {},
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);
  const { theme } = useTheme();

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
    onToggle(false);
  };

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    onToggle(false);
  });

  const renderTrigger = () => {
    if (textDrop) {
      return <>{selectedItem}</>;
    } else {
      return React.cloneElement(trigger);
    }
  };

  useEffect(() => {
    setSelectedItem(trigger);
  }, [trigger]);

  return (
    <div
      className={`${DropdownStyles.dropdown} ${
        DropdownStyles[`${theme}-theme`]
      }`}
      ref={dropdownRef}
      {...rest}
    >
      <div
        className={`${DropdownStyles.trigger} ${triggerClassName}`}
        onClick={handleToggle}
      >
        {renderTrigger()}
      </div>

      <div
        className={`${DropdownStyles.menu} ${
          isOpen ? `${menuClassName} ${DropdownStyles["menu-active"]}` : ""
        }`}
      >
        {isOpen && (
          <>
            {items
              ? items.map((item, index) => (
                  <div
                    className={`${DropdownStyles["menu-item"]} ${itemClassName}`}
                    key={index}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </div>
                ))
              : children}
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
