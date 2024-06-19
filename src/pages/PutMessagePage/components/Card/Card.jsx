import CardStyles from "./Card.module.scss";
import Badge from "./Badge";
import "./quill.css";

const Card = ({ message }) => {
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
      <div className={`${CardStyles.container}`}>
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
                From. <span>{sender}</span>
              </h2>
              <Badge>{relationship}</Badge>
            </div>
          </div>
        </div>
        <p
          className={`${CardStyles.description} ${
            CardStyles[getFontFamily(font)]
          }`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <div className={CardStyles.date}>{getFormattedDate()}</div>
      </div>
    </>
  );
};

export default Card;
