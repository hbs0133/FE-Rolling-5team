import React, { useState } from "react";
import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";
import reactionEmojiStyles from "../../ReactionEmoji/ReactionEmoji.module.scss";

export function ExpandedReactionDropdown({
  onSelectedEmoji = () => {},
  reactions = [],
}) {
  const emojis = {
    id: 0,
    native: "",
  };
  const handleEmojiSelect = (id, emoji) => {
    emojis.id = id;
    emojis.native = emoji;
    onSelectedEmoji(emojis);
  };

  return (
    <Dropdown
      trigger={<img src={arrowDown} alt="추가된 이모티콘 더보기" />}
      triggerClassName={ExpandedReactionDropdownStyles.trigger}
    >
      <div
        className={`${reactionEmojiStyles["emoji-container"]} ${ExpandedReactionDropdownStyles["emoji-container"]}`}
      >
        {reactions.map(({ id, emoji, count }) => (
          <span
            key={id}
            className={reactionEmojiStyles["emoji-button"]}
            onClick={() => handleEmojiSelect(id, emoji)}
          >
            <span className={reactionEmojiStyles["emoji"]}>{emoji} </span>
            <span className={reactionEmojiStyles["emoji"]}>{count}</span>
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
