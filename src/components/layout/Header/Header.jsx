import React, { useEffect, useState } from "react";
import HeaderStyles from "./Header.module.scss";
import CreateRollingPaper from "./components/CreateRollingPaper";
import HeaderService from "../HeaderService/HeaderService";
import RollingPaperLogo from "./components/RollingPaperLogo";
import { useLocation, useParams } from "react-router-dom";

function Header() {
  const location = useLocation();
  // 임시 페이지 id 할당
  const { id } = useParams();
  // 페이지 상태
  const [isPage, setIsPage] = useState({
    isHomePage: false,
    isListPage: false,
    isCreateRollingPage: false,
    isCreatedRollingListPage: false,
    isPostMessagePage: false,
  });

  useEffect(() => {
    setIsPage({
      isHomePage: location.pathname === "/",
      isListPage: location.pathname === "/list",
      isCreateRollingPage: location.pathname === "/post",
      isCreatedRollingListPage: location.pathname === `/post/${id}`,
      isPostMessagePage: location.pathname === `/post/${id}/message`,
    });
  }, [location, id]);

  return (
    <>
      <header className={HeaderStyles.main}>
        <div className={HeaderStyles.header}>
          <RollingPaperLogo />
          {(isPage.isHomePage || isPage.isListPage) && <CreateRollingPaper />}
        </div>
      </header>
      {isPage.isCreatedRollingListPage && <HeaderService />}
    </>
  );
}

export default Header;
