import Dropdown from "../Dropdown";
import shareImage from "../../../../assets/icons/ic_share.svg";
import shareDropdownStyles from "./ShareDropdown.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../Theme/ThemeContext";

const TEMPLATE_ID = 109064;

const ShareDropdown = () => {
  const { theme } = useTheme();
  const themeStyle = shareDropdownStyles[`${theme}-theme`];

  const actions = {
    "카카오톡 공유": () => {
      shareToKakao();
    },
    "URL 공유": () => {
      notify();
      copyCurrentUrl();
    },
  };

  // 카카오톡 공유 기능
  const shareToKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId: TEMPLATE_ID,
      });
    } else {
      console.error("Kakao SDK가 로드되지 않았습니다.");
    }
  };

  // 토스트 기능
  const notify = () =>
    toast.success("URL이 복사되었습니다.", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSelect = (item) => {
    if (actions[item]) {
      actions[item]();
    }
  };

  // URL 복사
  const copyCurrentUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (err) {
      console.error("URL 복사 실패:", err);
    }
  };

  return (
    <>
      <Dropdown
        trigger={
          <img
            src={shareImage}
            alt="외부링크 공유"
            className={`${shareDropdownStyles.image} ${themeStyle}`}
          />
        }
        items={Object.keys(actions)}
        onSelect={handleSelect}
        triggerClassName={`${shareDropdownStyles.trigger} ${themeStyle}`}
        menuClassName={`${shareDropdownStyles.menu} ${themeStyle}`}
        itemClassName={`${shareDropdownStyles.item}`}
      ></Dropdown>
      <div className={shareDropdownStyles.toast}>
        <ToastContainer />
      </div>
    </>
  );
};

export default ShareDropdown;
