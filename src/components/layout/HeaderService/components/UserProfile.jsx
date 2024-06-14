import React from "react";
import testImg from "../../../../assets/icons/testImg1.svg";
import HeaderServiceStyles from "../HeaderService.module.scss";

function UserProfile({ style }) {
  return (
    <img
      className={HeaderServiceStyles["user-profile"]}
      src={testImg}
      alt=""
      style={style}
    />
  );
}

export default UserProfile;
