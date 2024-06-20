import DeleteStyles from "./DeleteBtn.module.scss";

const DeleteBtn = ({ ...rest }) => {
  return (
    <>
      <button {...rest} type="button" className={DeleteStyles["delete-btn"]}>
        전체삭제
      </button>
    </>
  );
};

export default DeleteBtn;
