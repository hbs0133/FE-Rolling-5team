import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InView } from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader";
import ListStyles from "./CreatedRollingListPage.module.scss";
import Modal from "./Modal";
import Card from "./Card";
import DeleteBtn from "./DeleteBtn";
import DeleteModal from "./DeleteModal";
import plusEnabledIcon from "../../assets/icons/plusbtn_enabled_ic.svg";
import {
  getRecipientRollingPaper,
  getRecipientMessages,
  deleteRollingPaper,
  deleteMessage,
} from "../../services/api";
import { useTheme } from "../../components/UI/Theme/ThemeContext";

const CreatedRollingListPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const themeStyle = ListStyles[`${theme}-theme`];

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

  const [isFetching, setIsFetching] = useState(false);

  const [isModal, setIsModal] = useState({
    modalId: rollingRecentMessages.id,
  });

  const [isDeleteModal, setIsDeleteModal] = useState({
    isModal: false,
    rollingCardModalId: rollingCard.id,
    rollingRecentMessagesId: rollingRecentMessages.id,
  });

  const handleDeleteBtnClick = () => {
    setIsDeleteModal((prev) => ({
      ...prev,
      isModal: true,
    }));
  };

  async function fetchRecipientRollingPaper() {
    try {
      setIsLoading(true);
      const recipient = await getRecipientRollingPaper({
        id: id,
      });
      const message = await getRecipientMessages({
        id: id,
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

      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch recipient:", error);
    }
  }

  async function fetchMoreMessages() {
    if (isFetching || !rollingRecentMessages.next) return;

    setIsFetching(true);
    try {
      const newMessages = await getRecipientMessages({
        id,
        limit: 8,
        offset: rollingRecentMessages.results.length,
      });

      setRollingRecentMessages((prevState) => ({
        ...prevState,
        next: newMessages.next,
        results: [...prevState.results, ...newMessages.results],
      }));
      setIsFetching(false);
    } catch (error) {
      console.error("Failed to fetch more messages:", error);
      setIsFetching(false);
    }
  }

  async function deleteRecentMessage(id) {
    try {
      await deleteMessage(id);
      setRollingRecentMessages((prevState) => ({
        ...prevState,
        results: prevState.results.filter((msg) => msg.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  }

  async function deleteRecipient(id) {
    try {
      await deleteRollingPaper(id);
      navigate("/list");
    } catch (error) {
      console.error("Error deleting recipient:", error);
    }
  }

  useEffect(() => {
    fetchRecipientRollingPaper();
  }, [id]);

  return (
    <div
      className={ListStyles["background-container"]}
      style={
        rollingCard.backgroundImageURL
          ? { backgroundImage: `url(${rollingCard.backgroundImageURL})` }
          : { backgroundColor: `var(--${rollingCard.backgroundColor}-200)` }
      }
    >
      {isLoading ? (
        <div className={ListStyles["loading-spinner"]}>
          <ClipLoader
            color="#cccccc"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className={ListStyles["list-container"]}>
          {rollingRecentMessages.results.map((recent) =>
            isModal.modalId === recent.id ? (
              <Modal
                setIsModal={setIsModal}
                setIsDeleteModal={setIsDeleteModal}
                recentMessages={recent}
                theme={theme}
                key={recent.id}
              />
            ) : null
          )}
          {rollingRecentMessages.results.map((recent) =>
            isDeleteModal.rollingRecentMessagesId === recent.id ? (
              <DeleteModal
                name={recent.sender}
                title="메세지"
                id={recent.id}
                setIsModal={setIsModal}
                setIsDeleteModal={setIsDeleteModal}
                deleteFunction={deleteRecentMessage}
                theme={theme}
                key={recent.id}
              />
            ) : null
          )}

          {isDeleteModal.isModal && (
            <DeleteModal
              name={rollingCard.name}
              title="롤링페이퍼"
              id={rollingCard.id}
              setIsModal={setIsModal}
              setIsDeleteModal={setIsDeleteModal}
              deleteFunction={deleteRecipient}
              theme={theme}
            />
          )}
          <div className={ListStyles["flex-end"]}>
            <DeleteBtn onClick={handleDeleteBtnClick} />
          </div>
          <div className={ListStyles["list-wrap"]}>
            <Link
              to={`/post/${id}/message`}
              className={ListStyles["create-link"]}
            >
              <div
                className={`${ListStyles["create-container"]} ${themeStyle}`}
              >
                <button type="button" className={ListStyles["create-btn"]}>
                  <img src={plusEnabledIcon} alt="카드생성아이콘" />
                </button>
              </div>
            </Link>
            {rollingRecentMessages.results.map((recent, index) => (
              <div key={recent.id}>
                <Card
                  recentMessages={recent}
                  setIsModal={setIsModal}
                  theme={theme}
                />
                {index === rollingRecentMessages.results.length - 1 && (
                  <InView onChange={(inView) => inView && fetchMoreMessages()}>
                    <div></div>
                  </InView>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatedRollingListPage;
