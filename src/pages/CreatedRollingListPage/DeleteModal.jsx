import DeleteModalStyles from './DeleteModal.module.scss';

const DeleteModal = () => {
  return (
    <div className={DeleteModalStyles['background-opacity']}>
      <div className={DeleteModalStyles['deleteModal-container']}>
        <div className={DeleteModalStyles['deleteModal-checkMessage']}>
          정말 삭제하시겠습니까?
        </div>
        <div className={DeleteModalStyles['button-wrap']}>
          <button
            type="button"
            className={DeleteModalStyles['deleteModal-check-btn']}
          >
            확인
          </button>
          <button
            type="button"
            className={DeleteModalStyles['deleteModal-close-btn']}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
