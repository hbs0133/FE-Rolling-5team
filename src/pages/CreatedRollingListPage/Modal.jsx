import { Link } from "react-router-dom";
import ModalStyles from "./Modal.module.scss";
import Button from "../../components/UI/Button/Button";
import Badge from "./Badge";
import closeBlackIcon from "../../assets/icons/close_black_icon.svg";
import closeWhiteIcon from "../../assets/icons/close_white_icon.svg";

const Modal = ({
  setIsModal,
  setIsDeleteModal,
  recentMessages,
  theme,
  ...rest
}) => {
  const themeStyle = ModalStyles[`${theme}-theme`];

  const handleCheckClick = () => {
    setIsModal((prev) => ({
      ...prev,
      modalId: 0,
    }));
  };

  const handleDeleteBtnClick = () => {
    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: false,
      rollingRecentMessagesId: recentMessages.id,
    }));
  };

  return (
    <div {...rest} className={ModalStyles["background-opacity"]}>
      <div className={`${ModalStyles.container} ${themeStyle}`}>
        <button onClick={handleCheckClick} className={ModalStyles["close-btn"]}>
          <img
            src={theme === "dark" ? closeWhiteIcon : closeBlackIcon}
            alt="닫기버튼"
          />
        </button>
        <div className={ModalStyles["profile-wrap"]}>
          <div>
            <img
              src={recentMessages.profileImageURL}
              alt="프로필이미지"
              className={ModalStyles["profile-img"]}
            />
            <div>
              <h2 className={`${ModalStyles["profile-name"]} ${themeStyle}`}>
                From. <span>{recentMessages.sender}</span>
              </h2>
              <Badge>{recentMessages.relationship}</Badge>
            </div>
          </div>
          <div className={`${ModalStyles.date} ${themeStyle}`}>
            {recentMessages.createdAt.replace(/-/g, ".").split("T")[0]}
          </div>
        </div>
        <p
          className={`${ModalStyles.description} ${themeStyle}`}
          dangerouslySetInnerHTML={{ __html: recentMessages.content }}
          style={
            recentMessages.font === "나눔손글씨 손편지체"
              ? { fontFamily: "Handletter" }
              : { fontFamily: recentMessages.font }
          }
        ></p>
        <div className={ModalStyles["button-wrap"]}>
          <div className={ModalStyles["check-Button"]}>
            <Link to={`/put/${recentMessages.id}/message/`}>
              <Button size="small">수정하기</Button>
            </Link>
          </div>
          <div className={ModalStyles["check-Button"]}>
            <Button
              size="small"
              className={ModalStyles["font-color"]}
              onClick={handleDeleteBtnClick}
            >
              삭제하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
