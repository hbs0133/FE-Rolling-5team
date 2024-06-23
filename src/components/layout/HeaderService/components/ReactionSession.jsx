import HeaderServiceStyles from "../HeaderService.module.scss";
import TopReactions from "../../../UI/ReactionEmoji/TopReactions";
import ExpandedReactionDropdown from "../../../UI/Dropdown/components/ExpandedReactionDropdown";
import AddReactionDropdown from "../../../UI/Dropdown/components/AddReactionDropdown";
import Skeleton from "react-loading-skeleton";

function ReactionSession({
  topReactions,
  reactions,
  onSelectedEmoji = () => {},
  isLoading = false,
}) {
  return (
    <div className={HeaderServiceStyles["reaction-session"]}>
      <div className={HeaderServiceStyles["reaction-wrapper"]}>
        {/* 공용 컴포넌트로 가장 많은 리액션 3종류만 */}
        {isLoading ? (
          <Skeleton height={30} width={200} />
        ) : (
          <TopReactions
            topReactions={topReactions}
            onSelectedEmoji={onSelectedEmoji}
          />
        )}
        {/* 드롭다운으로 확장되면 모든 누적 리액션 보이기 */}
        <ExpandedReactionDropdown
          onSelectedEmoji={onSelectedEmoji}
          reactions={reactions}
        />
      </div>
      {/* 리액션 이모지 추가 */}
      <AddReactionDropdown onSelectedEmoji={onSelectedEmoji} />
    </div>
  );
}

export default ReactionSession;
