import { useState } from "react";
import ListStyles from "./CreatedRollingListPage.module.scss";
import Modal from "./Modal";
import Card from "./Card";
import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";
import plusEnabledIcon from "../../assets/icons/plusbtn_enabled_ic.svg";

const CreatedRollingListPage = () => {
  const [rollingList, setRollingList] = useState({});
  const [disabled, setDisabled] = useState(false);
  return (
    <div className={ListStyles["background-container"]}>
      <div className={ListStyles["list-container"]}>
        <div className={ListStyles["flex-end"]}>
          <DeleteBtn />
        </div>
        <div className={ListStyles["list-wrap"]}>
          <div className={ListStyles["create-container"]}>
            <button
              type="button"
              disabled={disabled}
              className={ListStyles["create-btn"]}
            >
              <img src={plusEnabledIcon} alt="카드생성아이콘" />
            </button>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CreatedRollingListPage;
