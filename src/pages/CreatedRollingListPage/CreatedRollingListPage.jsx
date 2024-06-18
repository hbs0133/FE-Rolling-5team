import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ListStyles from "./CreatedRollingListPage.module.scss";
import Modal from "./Modal";
import Card from "./Card";
import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";
import plusEnabledIcon from "../../assets/icons/plusbtn_enabled_ic.svg";
import deleteIcon from "../../assets/icons/delete_ic.svg";
import {
  getRecipientRollingPaper,
  getRecipientMessages,
} from "../../services/api";

const CreatedRollingListPage = () => {
  const { id } = useParams();
  const pathId = "7191";

  const [isLoading, setIsLoading] = useState(false);
  const [rollingCard, setRollingCard] = useState({
    id: null,
    name: "",
    backgroundColor: "",
    backgroundImageURL: null,
    createdAt: "",
    messageCount: 0,
    recentMessages: [
      {
        id: null,
        recipientId: null,
        sender: "",
        profileImageURL: "",
        relationship: "",
        content: "",
        font: "",
        createdAt: "",
      },
    ],
    reactionCount: 0,
    topReactions: [],
  });

  const [rollingRecentMessages, setRollingRecentMessages] = useState({
    count: 0,
    next: null,
    previous: "",
    results: [
      {
        id: null,
        recipientId: null,
        sender: "",
        profileImageURL: "",
        relationship: "",
        content: "",
        font: "",
        createdAt: "",
      },
    ],
  });

  const [isModal, setIsModal] = useState({
    modalId: rollingRecentMessages.id,
  });

  const [isDeleteModal, setIsDeleteModal] = useState({
    isModal: false,
    modalId: rollingRecentMessages.id,
  });

  const handleDeleteBtnClick = () => {
    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: true,
    }));
  };

  async function fetchRecipientRollingPaper() {
    try {
      setIsLoading(false);
      const recipient = await getRecipientRollingPaper({
        id: pathId,
      });
      const message = await getRecipientMessages({
        id: pathId,
        limit: 8,
        offset: 0,
      });
      setRollingCard((prevState) => ({
        ...prevState,
        ...recipient,
      }));

      setRollingRecentMessages((prevState) => ({
        ...prevState,
        ...message,
      }));

      setIsLoading(true);
    } catch (error) {
      console.error("Failed to fetch recipient:", error);
    }
  }

  useEffect(() => {
    fetchRecipientRollingPaper();
  }, [pathId]);

  return (
    <div
      className={ListStyles["background-container"]}
      style={
        rollingCard.backgroundImageURL === null
          ? { backgroundColor: rollingCard.backgroundColor }
          : { backgroundImage: `url(${rollingCard.backgroundImageURL})` }
      }
    >
      <div className={ListStyles["list-container"]}>
        {rollingRecentMessages.results.map((recent) =>
          isModal.modalId === recent.id ? (
            <Modal
              setIsModal={setIsModal}
              setIsDeleteModal={setIsDeleteModal}
              recentMessages={recent}
              key={recent.id}
            />
          ) : null
        )}
        {rollingRecentMessages.results.map((recent) =>
          isDeleteModal.modalId === recent.id ? (
            <DeleteModal
              setIsModal={setIsModal}
              setIsDeleteModal={setIsDeleteModal}
              name={recent.sender}
              title="메세지"
              key={recent.id}
            />
          ) : null
        )}

        {isDeleteModal.isModal && (
          <DeleteModal
            name={rollingCard.name}
            title="롤링페이퍼"
            setIsModal={setIsModal}
            setIsDeleteModal={setIsDeleteModal}
          />
        )}
        <div className={ListStyles["flex-end"]}>
          <button
            type="button"
            className={ListStyles["delete-btn"]}
            onClick={handleDeleteBtnClick}
          >
            <img src={deleteIcon} alt="삭제버튼" />
          </button>
        </div>
        <div className={ListStyles["list-wrap"]}>
          <Link to="#" className={ListStyles["create-link"]}>
            <div className={ListStyles["create-container"]}>
              <button type="button" className={ListStyles["create-btn"]}>
                <img src={plusEnabledIcon} alt="카드생성아이콘" />
              </button>
            </div>
          </Link>
          {rollingRecentMessages.results.map((recent) => (
            <Card
              recentMessages={recent}
              key={recent.id}
              setIsModal={setIsModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatedRollingListPage;
