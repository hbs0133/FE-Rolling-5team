import React, { useState, useEffect } from "react";
import ReactionEmojiStyles from "./ReactionEmoji.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";

function TopReactions({ topReactions = [], onSelectedEmoji = () => {} }) {
  const location = useLocation();
  const { id } = useParams();
  const isCreatedRollingListPage = location.pathname === `/post/${id}`;
  const isListPage = location.pathname === "/list";
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    if (topReactions.length > 0) {
      const newCount = topReactions.slice(0, 3).map((item) => item.count);
      setCounts(newCount);
    }
  }, [topReactions]);

  const transitions = [
    useTransition(counts[0], {
      from: { opacity: 0, transform: "translateY(-10px)" },
      enter: { opacity: 1, transform: "translatefY(0)" },
      leave: { opacity: 0, transform: "translateY(10px)" },
      config: { duration: 300 },
    }),
    useTransition(counts[1], {
      from: { opacity: 0, transform: "translateY(-10px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(10px)" },
      config: { duration: 300 },
    }),
    useTransition(counts[2], {
      from: { opacity: 0, transform: "translateY(-10px)" },
      enter: { opacity: 1, transform: "translateY(0)" },
      leave: { opacity: 0, transform: "translateY(10px)" },
      config: { duration: 300 },
    }),
  ];

  const handleEmojiSelect = (item) => {
    item.native = item.emoji;
    onSelectedEmoji(item);
  };

  return (
    <>
      <div className={ReactionEmojiStyles["emoji-container"]}>
        {isCreatedRollingListPage && !topReactions.length && (
          <span>감정을 표현해보세요!</span>
        )}
        {topReactions.map((item, index) => (
          <span
            key={item.id}
            className={`${ReactionEmojiStyles["emoji-button"]} ${
              isListPage ? ReactionEmojiStyles["list-page"] : ""
            }`}
            onClick={() => handleEmojiSelect(item)}
          >
            <span className={ReactionEmojiStyles["emoji"]}>{item.emoji}</span>
            {isListPage && (
              <span className={ReactionEmojiStyles["emoji"]}>
                {item.count > 99 ? "+99" : item.count}
              </span>
            )}
            {!isListPage && (
              <span className={ReactionEmojiStyles["count-ani"]}>
                {transitions[index]((style, item) => (
                  <animated.span
                    style={style}
                    className={ReactionEmojiStyles["emoji"]}
                  >
                    {item > 99 ? "+99" : item}
                  </animated.span>
                ))}
              </span>
            )}
          </span>
        ))}
      </div>
    </>
  );
}

export default TopReactions;
