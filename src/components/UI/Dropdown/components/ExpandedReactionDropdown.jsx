import React from "react";
import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";

export function ExpandedReactionDropdown({ reactions }) {
  const reactionsData = reactions || [{ id: 1, emoji: "👍", count: 50 }];

  return (
    <Dropdown
      trigger={
        <button className={ExpandedReactionDropdownStyles["dropdown-arrow"]}>
          <img src={arrowDown} alt="추가된 이모티콘 더보기" />
        </button>
      }
    >
      <div className={ExpandedReactionDropdownStyles["emoji-container"]}>
        {reactionsData.map(({ id, emoji, count }) => (
          <span key={id} className={ExpandedReactionDropdownStyles.emoji}>
            {emoji} {count}
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
