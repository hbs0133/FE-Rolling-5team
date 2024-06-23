import React from "react";
import HeaderServiceStyles from "../HeaderService.module.scss";
import CountPeople from "../../../UI/CountPeople/CountPeople.jsx";
import ProfileImagePreview from "../../../UI/ProfileImagePreview/ProfileImagePreview";

function CumulativeUsers({ senderCount, recentMessages }) {
  return (
    <div className={HeaderServiceStyles["cumulative-user-container"]}>
      <ProfileImagePreview
        peopleCount={senderCount}
        recentMessage={recentMessages}
      />
      <CountPeople peopleCount={senderCount} />
    </div>
  );
}

export default CumulativeUsers;
