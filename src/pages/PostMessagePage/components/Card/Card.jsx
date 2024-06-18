import CardStyles from "./Card.module.scss";
import Badge from "./Badge";

const Card = ({ message }) => {
  const { sender, profileImageURL, relationship, content, font } = message;
  console.log("메시지", message);

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <>
      <div
        className={`${CardStyles.container} ${
          sender && content && CardStyles.validAnimation
        }`}
      >
        <div className={CardStyles["profile-wrap"]}>
          <div>
            <img
              src={profileImageURL}
              alt="프로필이미지"
              className={CardStyles["profile-img"]}
            />
            <div>
              <h2
                className={`${CardStyles["profile-name"]} ${
                  !sender && CardStyles["invalid"]
                }`}
              >
                From.{" "}
                {sender ? (
                  <span>{sender}</span>
                ) : (
                  <span className={CardStyles["invalid"]}>
                    From.이 없어요 값을 입력해주세요!
                  </span>
                )}
              </h2>
              <Badge>{relationship}</Badge>
            </div>
          </div>
        </div>
        {content ? (
          <p
            className={CardStyles.description}
            dangerouslySetInnerHTML={{ __html: content }}
            style={{ fontFamily: font }}
          ></p>
        ) : (
          <p className={`${CardStyles.description} ${CardStyles["invalid"]}`}>
            내용이 없어요 값을 입력해주세요!
          </p>
        )}

        <div className={CardStyles.date}>{getFormattedDate()}</div>
      </div>
      {sender && content && (
        <div className={CardStyles.valid}>생성이 가능합니다 !</div>
      )}
    </>
  );
};

export default Card;
