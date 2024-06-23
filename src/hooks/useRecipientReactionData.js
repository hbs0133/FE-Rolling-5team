import { useState, useEffect } from "react";
import { getRecipientIdList, postReaction } from "../services/api";
import { useParams } from "react-router-dom";

const useRecipientData = (pageId = 0) => {
  const { id } = useParams();
  const recipientId = id ? Number(id) : pageId;

  const [recipientData, setRecipientData] = useState({
    topReactions: [],
    reactions: [],
    userName: "",
    senderCount: 0,
    recentMessages: [],
  });

  const [selectedEmoji, setSelectedEmoji] = useState({});

  const fetchRecipientData = async (recipientId) => {
    try {
      const recipient = await getRecipientIdList({ id: recipientId });
      const reaction = await getRecipientIdList({
        id: recipientId,
        isReactions: true,
        limit: 8,
      });

      setRecipientData({
        topReactions: recipient.topReactions,
        userName: recipient.name,
        senderCount: recipient.messageCount,
        recentMessages: recipient.recentMessages,
        reactions: reaction.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendReactionData = async (id, emoji) => {
    try {
      const reaction = { emoji: emoji.native, type: "increase" };
      const response = await postReaction({ id: id, reaction: reaction });
      setSelectedEmoji(emoji);
      console.log("Response from server:", response);
    } catch (error) {
      console.error("Error posting reaction:", error);
    }
  };

  useEffect(() => {
    if (recipientId) {
      fetchRecipientData(recipientId);
    }
  }, [recipientId, selectedEmoji]);

  const handleSelectedEmoji = (emoji) => {
    sendReactionData(recipientId, emoji);
  };

  return {
    recipientData,
    selectedEmoji,
    handleSelectedEmoji,
  };
};

export default useRecipientData;
