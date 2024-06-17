import React from "react";
import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";
import reactionEmojiStyles from "../../ReactionEmoji/ReactionEmoji.module.scss";

export function ExpandedReactionDropdown({ reactions }) {
  return (
    <Dropdown
      trigger={<img src={arrowDown} alt="추가된 이모티콘 더보기" />}
      triggerClassName={ExpandedReactionDropdownStyles["dropdown-arrow"]}
    >
      <div
        className={`${reactionEmojiStyles["emoji-container"]} ${ExpandedReactionDropdownStyles["emoji-container"]}`}
      >
        {reactions.map(({ id, emoji, count }) => (
          <span key={id} className={reactionEmojiStyles["emoji-button"]}>
            <span className={reactionEmojiStyles["emoji"]}>{emoji} </span>
            <span className={reactionEmojiStyles["emoji"]}>{count}</span>
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
