import React from "react";
import ReactionEmojiStyles from "./ReactionEmoji.module.scss";

function TopReactions({ topReactions }) {
  return (
    <div className={ReactionEmojiStyles["emoji-container"]}>
      {topReactions.map(({ id, emoji, count }) => (
        <span key={id} className={ReactionEmojiStyles["emoji-button"]}>
          <span className={ReactionEmojiStyles["emoji"]}>{emoji} </span>
          <span className={ReactionEmojiStyles["emoji"]}>{count}</span>
        </span>
      ))}
    </div>
  );
}

export default TopReactions;
