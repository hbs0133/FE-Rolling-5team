import DeleteModalStyles from "./DeleteModal.module.scss";

const DeleteModal = ({ name, title, setIsModal, setIsDeleteModal, key }) => {
  const handleCheckBtnClick = () => {
    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: false,
      modalId: 0,
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
      modalId: 0,
    }));
  };
  return (
    <div className={DeleteModalStyles["background-opacity"]} key={key}>
      <div className={DeleteModalStyles["deleteModal-container"]}>
        <div className={DeleteModalStyles["deleteModal-checkMessage"]}>
          <h2>
            {name}님의 {title} 삭제
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
