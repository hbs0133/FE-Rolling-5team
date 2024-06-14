import React from "react";
import HeaderStyles from "../Header.module.scss";
import { Link } from "react-router-dom";

function CreateRollingPaper() {
  return (
    <Link to="/post">
      <button className={HeaderStyles["create-button"]}>
        롤링 페이퍼 만들기
      </button>
    </Link>
  );
}

export default CreateRollingPaper;
