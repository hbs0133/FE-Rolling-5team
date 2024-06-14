import { useEffect, useState } from "react";
import CumulativeUsers from "./components/CumulativeUsers";
import ExternalSharing from "./components/ExternalSharing";
import ReactionSession from "./components/ReactionSession";
import HeaderServiceStyles from "./HeaderService.module.scss";
import { getReactionList, getRecipientList } from "../../../services/api";

function HeaderService() {
  // 해당 페이지의 id 얻기
  // const { recipientId } = useParams();

  // 임시 페이지 id 할당
  const recipientId = 7889;

  // 데이터 관리를 위한 객체
  const [recipientData, setRecipientData] = useState({
    topReactions: [],
    reactions: [],
    userName: "",
    senderCount: 0,
    recentMessages: [],
  });

  const fetchData = async () => {
    try {
      const recipient = await getRecipientList();
      const reaction = await getReactionList({ id: recipientId });

      // recipientId에 해당하는 객체 찾기
      const foundRecipient = recipient.results.find(
        (r) => r.id === recipientId
      );

      setRecipientData({
        topReactions: foundRecipient.topReactions,
        userName: foundRecipient.name,
        senderCount: foundRecipient.messageCount,
        recentMessages: foundRecipient.recentMessages,
        reactions: reaction.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { topReactions, reactions, userName, senderCount, recentMessages } =
    recipientData;

  return (
    <div className={HeaderServiceStyles.main}>
      <div className={HeaderServiceStyles["header-service"]}>
        <h1 className={HeaderServiceStyles["user-name"]}>To. {userName}</h1>
        <div className={HeaderServiceStyles["service-wrapper"]}>
          <CumulativeUsers
            senderCount={senderCount}
            recentMessages={recentMessages}
          />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["first-line"]}`}
          ></div>
          <ReactionSession topReactions={topReactions} reactions={reactions} />
          <div
            className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["second-line"]}`}
          ></div>
          <ExternalSharing />
        </div>
      </div>
    </div>
  );
}

export default HeaderService;
