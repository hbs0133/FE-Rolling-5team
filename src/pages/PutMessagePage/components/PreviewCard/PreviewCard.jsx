import CardStyles from "./PreviewCard.module.scss";
import Badge from "./Badge";

const Card = ({ message, previewProfileImage }) => {
  const { sender, profileImageURL, relationship, content, font } = message;

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const getFontFamily = (font) => {
    let fontFamily;
    if (font === "Noto Sans") {
      fontFamily = "notoSans";
    }
    if (font === "Pretendard") {
      fontFamily = null;
    }
    if (font === "나눔명조") {
      fontFamily = "nanumMyeongjo";
    }
    if (font === "나눔손글씨 손편지체") {
      fontFamily = "handletter";
    }
    return fontFamily;
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
              src={previewProfileImage}
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
                    From.을 입력해주세요!
                  </span>
                )}
              </h2>
              <Badge>{relationship}</Badge>
            </div>
          </div>
        </div>
        {content ? (
          <p
            className={`${CardStyles.description} ${
              CardStyles[getFontFamily(font)]
            }`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        ) : (
          <p className={`${CardStyles.description} ${CardStyles["invalid"]}`}>
            내용을 입력해주세요!
          </p>
        )}

        <div className={CardStyles.date}>{getFormattedDate()}</div>
      </div>
      {sender && content && (
        <div className={CardStyles.valid}>수정이 가능합니다 !</div>
      )}
    </>
  );
};

export default Card;
