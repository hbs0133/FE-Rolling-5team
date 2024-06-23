import React from "react";
import HeaderStyles from "../Header.module.scss";
import { Link } from "react-router-dom";
import logoImage from "../../../../assets/icons/logo.svg";
import logoDarkImage from "../../../../assets/icons/logo-dark.svg";

function RollingPaperLogo({ theme }) {
  return (
    <Link to="/" className={HeaderStyles.logo}>
      {theme === "dark" ? (
        <img src={logoDarkImage} alt="롤링페이퍼 로고" />
      ) : (
        <img src={logoImage} alt="롤링페이퍼 로고" />
      )}
    </Link>
  );
}

export default RollingPaperLogo;
