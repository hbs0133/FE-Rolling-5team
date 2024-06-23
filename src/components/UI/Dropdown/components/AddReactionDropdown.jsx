import Dropdown from "../Dropdown";
import AddReactionDropdownStyles from "./AddReactionDropdown.module.scss";
import addEmojiImage from "../../../../assets/icons/ic_add-emoji.svg";
import emojiData from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useTheme } from "../../Theme/ThemeContext";

export function AddReactionDropdown({ onSelectedEmoji = () => {} }) {
  const handleEmojiSelect = (emoji) => {
    onSelectedEmoji(emoji);
  };

  const { theme } = useTheme();
  const themeStyle = AddReactionDropdownStyles[`${theme}-theme`];

  return (
    <Dropdown
      trigger={
        <div
          className={`${AddReactionDropdownStyles["add-container"]} ${themeStyle}`}
        >
          <img
            src={addEmojiImage}
            alt="이모지 추가"
            className={AddReactionDropdownStyles.image}
          />
          <span className={AddReactionDropdownStyles.text}>추가</span>
        </div>
      }
      triggerClassName={`${AddReactionDropdownStyles.trigger} ${themeStyle}`}
      menuClassName={AddReactionDropdownStyles.menu}
    >
      <div className={AddReactionDropdownStyles["emoji-container"]}>
        <Picker
          data={emojiData}
          onEmojiSelect={handleEmojiSelect}
          theme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </Dropdown>
  );
}

export default AddReactionDropdown;
