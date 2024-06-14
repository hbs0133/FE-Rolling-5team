import React, { useRef, useState } from "react";
import DropdownStyles from "./Dropdown.module.scss";
import useClickOutside from "../../../hooks/useClickOutside";

const Dropdown = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className={DropdownStyles.dropdown} ref={dropdownRef}>
      <div className={DropdownStyles.trigger} onClick={handleToggle}>
        {trigger}
      </div>
      {isOpen && <div className={DropdownStyles.menu}>{children}</div>}
    </div>
  );
};

export default Dropdown;
