import CardStyles from "./Card.module.scss";
import Badge from "./Badge";

const Card = ({ recentMessages, setIsModal, theme, ...rest }) => {
  const themeStyle = CardStyles[`${theme}-theme`];

  const handleCardClick = () => {
    setIsModal((prev) => ({
      ...prev,
      isModal: true,
      modalId: recentMessages.id,
    }));
  };

  return (
    <>
      <div
        {...rest}
        className={`${CardStyles.container} ${themeStyle}`}
        onClick={handleCardClick}
      >
        <div className={CardStyles["profile-wrap"]}>
          <div>
            <img
              src={recentMessages.profileImageURL}
              alt="프로필이미지"
              className={CardStyles["profile-img"]}
            />
            <div>
              <h2 className={`${CardStyles["profile-name"]} ${themeStyle}`}>
                From. <span>{recentMessages.sender}</span>
              </h2>
              <Badge>{recentMessages.relationship}</Badge>
            </div>
          </div>
        </div>
        <p
          className={`${CardStyles.description} ${themeStyle}`}
          dangerouslySetInnerHTML={{ __html: recentMessages.content }}
          style={
            recentMessages.font === "나눔손글씨 손편지체"
              ? { fontFamily: "Handletter" }
              : { fontFamily: recentMessages.font }
          }
        ></p>
        <div className={`${CardStyles.date} ${themeStyle}`}>
          {recentMessages.createdAt.replace(/-/g, ".").split("T")[0]}
        </div>
      </div>
    </>
  );
};

export default Card;
