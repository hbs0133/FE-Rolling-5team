import React from "react";
import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";
import ReactionEmojiStyles from "../../EmojiReaction/ReactionEmoji.module.scss";

export function ExpandedReactionDropdown({ reactions }) {
  return (
    <Dropdown
      trigger={
        <button className={ExpandedReactionDropdownStyles["dropdown-arrow"]}>
          <img src={arrowDown} alt="추가된 이모티콘 더보기" />
        </button>
      }
    >
      <div
        className={`${ReactionEmojiStyles["emoji-container"]} ${ExpandedReactionDropdownStyles["emoji-container"]}`}
      >
        {reactions.map(({ id, emoji, count }) => (
          <span key={id} className={ReactionEmojiStyles["emoji-button"]}>
            <span className={ReactionEmojiStyles["emoji"]}>{emoji} </span>
            <span className={ReactionEmojiStyles["emoji"]}>{count}</span>
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
