import React, { useEffect, useRef, useState } from "react";
import modalStyles from "./Modal.module.scss";
import Button from "../../../../components/UI/Button/Button";
import Card from "../Card/Card";

const Modal = ({
  value,
  isSubmitting,
  onSubmit,
  recipientName,
  previewProfileImage,
  onImageChange,
  isUpLoadImage,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalBackground = useRef();

  const handleOnClickOpen = () => {
    setModalOpen(true);
    onImageChange();
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <>
      <Button
        type="button"
        widthMax={true}
        className={modalStyles["modal-open-button"]}
        disable={value.sender && value.content && !isSubmitting ? false : true}
        onClick={handleOnClickOpen}
      >
        생성하기
      </Button>
      {modalOpen && (
        <div
          className={modalStyles["modal-container"]}
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false);
            }
          }}
        >
          <div className={modalStyles["modal-content"]}>
            <p className={modalStyles["modal-content-recipient"]}>
              <span>{recipientName}</span> 에게 메시지를 수정하시겠습니까?
            </p>
            <Card message={value} previewProfileImage={previewProfileImage} />
            <div className={modalStyles["modal-buttons"]}>
              <Button size="small" onClick={onSubmit} disable={!isUpLoadImage}>
                {!isUpLoadImage ? "로딩중" : "수정하기"}
              </Button>
              <Button
                size="small"
                className={modalStyles["modal-close-btn"]}
                onClick={() => setModalOpen(false)}
              >
                취소
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
