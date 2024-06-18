import Dropdown from "../Dropdown";
import AddReactionDropdownStyles from "./AddReactionDropdown.module.scss";
import addEmojiImage from "../../../../assets/icons/ic_add-emoji.svg";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import useDeviceType from "../../../../hooks/useDeviceType";

export function AddReactionDropdown({ onSelectedEmoji = () => {} }) {
  const handleEmojiSelect = (emoji) => {
    onSelectedEmoji(emoji);
    console.log(emoji);
  };

  const deviceType = useDeviceType();

  return (
    <Dropdown
      trigger={
        <div className={AddReactionDropdownStyles["add-container"]}>
          <img src={addEmojiImage} alt="이모지 추가" />
          {deviceType !== "mobile" && <span>추가</span>}
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
