import React from "react";
import ReactionEmojiStyles from "./ReactionEmoji.module.scss";
import useRecipientData from "../../../hooks/useRecipientReactionData";

function TopReactions({ id = 0, topReactions = [] }) {
  const { recipientData } = useRecipientData(id);
  const reactions =
    topReactions.length !== 0 ? topReactions : recipientData.topReactions;

  return (
    <div className={ReactionEmojiStyles["emoji-container"]}>
      {reactions.map(({ id, emoji, count }) => (
        <span key={id} className={ReactionEmojiStyles["emoji-button"]}>
          <span className={ReactionEmojiStyles["emoji"]}>{emoji} </span>
          <span className={ReactionEmojiStyles["emoji"]}>{count}</span>
        </span>
      ))}
    </div>
  );
}

export default TopReactions;
