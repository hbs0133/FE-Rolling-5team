import { useState } from "react";
import CardStyles from "./Card.module.scss";
import Badge from "./Badge";

const Card = ({ recentMessages, key, setIsModal }) => {
  const handleCardClick = () => {
    setIsModal((prev) => ({
      ...prev,
      isModal: true,
      modalId: recentMessages.id,
    }));
  };

  return (
    <>
      <div className={CardStyles.container} key={key} onClick={handleCardClick}>
        <div className={CardStyles["profile-wrap"]}>
          <div>
            <img
              src={recentMessages.profileImageURL}
              alt="프로필이미지"
              className={CardStyles["profile-img"]}
            />
            <div>
              <h2 className={CardStyles["profile-name"]}>
                From. <span>{recentMessages.sender}</span>
              </h2>
              <Badge>{recentMessages.relationship}</Badge>
            </div>
          </div>
        </div>
        <p
          className={CardStyles.description}
          dangerouslySetInnerHTML={{ __html: recentMessages.content }}
          style={{ fontFamily: recentMessages.font }}
        ></p>
        <div className={CardStyles.date}>
          {recentMessages.createdAt.replace(/-/g, ".").split("T")[0]}
        </div>
      </div>
    </>
  );
};

export default Card;
