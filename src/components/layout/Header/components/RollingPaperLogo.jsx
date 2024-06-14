import React from "react";
import HeaderStyles from "../Header.module.scss";
import { Link } from "react-router-dom";
import logoImage from "../../../../assets/icons/logo.svg";

function RollingPaperLogo() {
  return (
    <Link to="/" className={HeaderStyles.logo}>
      <img src={logoImage} alt="롤링페이퍼 로고" />
    </Link>
  );
}

export default RollingPaperLogo;
