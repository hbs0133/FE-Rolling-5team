import { useState } from 'react';
import CardStyles from './Card.module.scss';
import deleteIcon from '../../assets/icons/delete_ic.svg';
import plusEnabledIcon from '../../assets/icons/Plusbtn_Enabled_ic.svg';

const Card = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <div className={CardStyles.container}>
        <div className={CardStyles['profile-wrap']}>
          <div>
            <img
              src="#"
              alt="프로필이미지"
              className={CardStyles['profile-img']}
            />
            <div>
              <h2 className={CardStyles['profile-name']}>
                From. <span>김당찬</span>
              </h2>
              <div className={CardStyles['profile-relation']}>동료</div>
            </div>
          </div>
          <button type="button" className={CardStyles['delete-btn']}>
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
      <div className={CardStyles.container}>
        <button
          type="button"
          disabled={disabled}
          className={CardStyles['create-btn']}
        >
          <img src={plusEnabledIcon} alt="카드생성아이콘" />
        </button>
      </div>
    </>
  );
};

export default Card;
