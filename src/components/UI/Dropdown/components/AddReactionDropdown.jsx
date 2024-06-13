import Dropdown from "../Dropdown";
import AddReactionDropdownStyles from "./AddReactionDropdown.module.scss";
import addEmogilImage from "../../../../assets/icons/ic_add-emoji.svg";

export function AddReactionDropdown() {
  const emojis = ["👍", "❤️", "🎉", "😂"];

  return (
    <Dropdown
      trigger={
        <button className={AddReactionDropdownStyles["custom-button"]}>
          <img src={addEmogilImage} alt="이모지 추가" /> 추가
        </button>
      }
    >
      <div className={AddReactionDropdownStyles["emoji-container"]}>
        {emojis.map((emoji, index) => (
          <span key={index} className={AddReactionDropdownStyles.emoji}>
            {emoji}
          </span>
        ))}
      </div>
    </Dropdown>
  );
}

export default AddReactionDropdown;
