import AddReaction from "./AddReaction";
import HeaderServiceStyles from "../HeaderService.module.scss";
import TopReactions from "../../../UI/ReactionEmoji/TopReactions";
import ExpandedReactionDropdown from "../../../UI/Dropdown/components/ExpandedReactionDropdown";

function ReactionSession({ topReactions, reactions }) {
  return (
    <div className={HeaderServiceStyles["reaction-session"]}>
      <div className={HeaderServiceStyles["reaction-wrapper"]}>
        {/* 공용 컴포넌트로 가장 많은 리액션 3종류만 */}
        <TopReactions topReactions={topReactions} />
        {/* 드롭다운으로 확장되면 모든 누적 리액션 보이기 */}
        <ExpandedReactionDropdown reactions={reactions} />
      </div>
      {/* 리액션 이모지 추가 */}
      <AddReaction />
    </div>
  );
}

export default ReactionSession;
