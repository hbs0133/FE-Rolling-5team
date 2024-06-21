import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CumulativeUsers from "./components/CumulativeUsers";
import ExternalSharing from "./components/ExternalSharing";
import ReactionSession from "./components/ReactionSession";
import HeaderServiceStyles from "./HeaderService.module.scss";
import useRecipientData from "../../../hooks/useRecipientReactionData";
import useDevice from "../../../hooks/useDevice";
import { useParams } from "react-router-dom";
import { useTheme } from "../../UI/Theme/ThemeContext";

function HeaderService() {
  const { id } = useParams();
  const { recipientData, handleSelectedEmoji } = useRecipientData(id);
  const { topReactions, reactions, userName, senderCount, recentMessages } =
    recipientData;
  const { isDesktop } = useDevice();
  const isLoading = !userName;

  const { theme } = useTheme();
  const themeStyle = HeaderServiceStyles[`${theme}-theme`];

  return (
    <div className={`${HeaderServiceStyles.main} ${themeStyle}`}>
      <div className={HeaderServiceStyles["header-service"]}>
        <h1 className={HeaderServiceStyles["user-name"]}>
          To. {isLoading ? <Skeleton height={28} width={150} /> : userName}
        </h1>
        <div className={HeaderServiceStyles["service-wrapper"]}>
          {isDesktop && (
            <>
              {isLoading ? (
                <Skeleton height={30} width={200} />
              ) : (
                <CumulativeUsers
                  senderCount={senderCount}
                  recentMessages={recentMessages}
                />
              )}
              <div
                className={`${HeaderServiceStyles["vertical-divider"]} ${HeaderServiceStyles["first-line"]}`}
              ></div>
            </>
          )}
          <ReactionSession
            topReactions={topReactions}
            reactions={reactions}
            onSelectedEmoji={handleSelectedEmoji}
            isLoading={isLoading}
          />
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
