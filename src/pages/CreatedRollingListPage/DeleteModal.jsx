import DeleteModalStyles from "./DeleteModal.module.scss";

const DeleteModal = ({
  name,
  title,
  id,
  setIsModal,
  setIsDeleteModal,
  deleteFunction,
  theme,
  ...rest
}) => {
  const themeStyle = DeleteModalStyles[`${theme}-theme`];

  const handleCheckBtnClick = () => {
    deleteFunction(id);

    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: false,
      rollingCardModalId: 0,
      rollingRecentMessagesId: 0,
    }));

    setIsModal((prev) => ({
      ...prev,
      modalId: 0,
    }));
  };

  const handleCloseBtnClick = () => {
    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: false,
      rollingCardModalId: 0,
      rollingRecentMessagesId: 0,
    }));
  };
  return (
    <div {...rest} className={DeleteModalStyles["background-opacity"]}>
      <div
        className={`${DeleteModalStyles["deleteModal-container"]} ${themeStyle}`}
      >
        <div
          className={`${DeleteModalStyles["deleteModal-checkMessage"]} ${themeStyle}`}
        >
          <h2>
            {name}님의
            <br />
            {title} 삭제
          </h2>
          <div>
            삭제하면 복구할 수 없습니다. <br />
            정말로 삭제하시겠습니까?
          </div>
        </div>
        <div className={DeleteModalStyles["button-wrap"]}>
          <button
            type="button"
            className={DeleteModalStyles["deleteModal-check-btn"]}
            onClick={handleCheckBtnClick}
          >
            확인
          </button>
          <button
            type="button"
            className={DeleteModalStyles["deleteModal-close-btn"]}
            onClick={handleCloseBtnClick}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
