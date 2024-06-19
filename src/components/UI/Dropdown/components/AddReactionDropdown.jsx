import Dropdown from "../Dropdown";
import AddReactionDropdownStyles from "./AddReactionDropdown.module.scss";
import addEmojiImage from "../../../../assets/icons/ic_add-emoji.svg";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import useDevice from "../../../../hooks/useDevice";

export function AddReactionDropdown({ onSelectedEmoji = () => {} }) {
  const handleEmojiSelect = (emoji) => {
    onSelectedEmoji(emoji);
  };

  const { mobile } = useDevice();

  return (
    <Dropdown
      trigger={
        <div className={AddReactionDropdownStyles["add-container"]}>
          <img src={addEmojiImage} alt="이모지 추가" />
          {!mobile && <span>추가</span>}
        </div>
      }
      triggerClassName={`${AddReactionDropdownStyles.trigger}`}
    >
      <div className={AddReactionDropdownStyles["emoji-container"]}>
        <Picker data={emojiData} onEmojiSelect={handleEmojiSelect} />
      </div>
    </Dropdown>
  );
}

export default AddReactionDropdown;
