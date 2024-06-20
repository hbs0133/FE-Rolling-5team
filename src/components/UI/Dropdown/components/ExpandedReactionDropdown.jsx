import Dropdown from "../Dropdown";
import arrowDown from "../../../../assets/icons/ic_arrow_down.svg";
import ExpandedReactionDropdownStyles from "./ExpandedReactionDropdown.module.scss";
import reactionEmojiStyles from "../../ReactionEmoji/ReactionEmoji.module.scss";
import { useState } from "react";

export function ExpandedReactionDropdown({
  onSelectedEmoji = () => {},
  reactions = [],
}) {
  const emojis = {
    id: 0,
    native: "",
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleEmojiSelect = (id, emoji) => {
    emojis.id = id;
    emojis.native = emoji;
    onSelectedEmoji(emojis);
  };

  const handleToggle = (isOpen) => {
    setIsOpen(isOpen);
  };

  return (
    <Dropdown
      trigger={
        <img
          src={arrowDown}
          alt="추가된 이모티콘 더보기"
          className={`${ExpandedReactionDropdownStyles["arrow-image"]} ${
            isOpen ? ExpandedReactionDropdownStyles["flipped"] : ""
          }`}
        />
      }
      triggerClassName={ExpandedReactionDropdownStyles.trigger}
      onToggle={handleToggle}
    >
      {!reactions.length && (
        <span
          className={ExpandedReactionDropdownStyles["emoji-empty-container"]}
        >
          감정을 표현해보세요!
        </span>
      )}
      {reactions.length > 0 && (
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
              <span className={reactionEmojiStyles["emoji"]}>
                {count > 999 ? "+999" : count}
              </span>
            </span>
          ))}
        </div>
      )}
    </Dropdown>
  );
}

export default ExpandedReactionDropdown;
