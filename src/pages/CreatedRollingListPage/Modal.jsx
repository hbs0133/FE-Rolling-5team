import ModalStyles from './Modal.module.scss';
import Button from '../../components/UI/Button/Button';
import Badge from './Badge';

const Modal = ({ image, name, relation, date, description }) => {
  return (
    <div className={ModalStyles['background-opacity']}>
      <div className={ModalStyles.container}>
        <div className={ModalStyles['profile-wrap']}>
          <div>
            <img
              src="#"
              alt="프로필이미지"
              className={ModalStyles['profile-img']}
            />
            <div>
              <h2 className={ModalStyles['profile-name']}>
                From. <span>김당찬</span>
              </h2>
              <Badge>동료</Badge>
            </div>
          </div>
          <div className={ModalStyles.date}>날짜</div>
        </div>
        <p className={ModalStyles.description}>
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
        <div className={ModalStyles['check-Button']}>
          <Button size="small">확인</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
