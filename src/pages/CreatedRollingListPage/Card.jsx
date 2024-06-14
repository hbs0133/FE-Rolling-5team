import { useState } from "react";
import CardStyles from "./Card.module.scss";
import Badge from "./Badge";
import deleteIcon from "../../assets/icons/delete_ic.svg";

const Card = () => {
  return (
    <>
      <div className={CardStyles.container}>
        <div className={CardStyles["profile-wrap"]}>
          <div>
            <img
              src="#"
              alt="프로필이미지"
              className={CardStyles["profile-img"]}
            />
            <div>
              <h2 className={CardStyles["profile-name"]}>
                From. <span>김당찬</span>
              </h2>
              <Badge>지인</Badge>
            </div>
          </div>
          <button type="button" className={CardStyles["delete-btn"]}>
            <img src={deleteIcon} alt="삭제버튼" />
          </button>
        </div>
        <p className={CardStyles.description}>
          안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬 주세요안녕하십니까
          고기반찬 주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬 주세요
          안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬 주세요안녕하십니까
          고기반찬 주세요안녕하십니까 고기반찬 주세요안녕하십니까 고기반찬
          주세요
        </p>
        <div className={CardStyles.date}>2020.02.20</div>
      </div>
    </>
  );
};

export default Card;
