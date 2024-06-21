import React, { useEffect, useState } from "react";
import HeaderStyles from "./Header.module.scss";
import CreateRollingPaper from "./components/CreateRollingPaper";
import HeaderService from "../HeaderService/HeaderService";
import RollingPaperLogo from "./components/RollingPaperLogo";
import { useLocation, useParams } from "react-router-dom";
import { useTheme } from "../../UI/Theme/ThemeContext";
import ThemedButton from "../../UI/Theme/ThemedButton";

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

  const { theme } = useTheme();
  const themeStyle = HeaderStyles[`${theme}-theme`];

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
      <header className={`${HeaderStyles.main} ${themeStyle}`}>
        <div className={HeaderStyles.header}>
          <RollingPaperLogo theme={theme} />
          <div className={HeaderStyles["button-wrapper"]}>
            <ThemedButton />
            {(isPage.isHomePage || isPage.isListPage) && <CreateRollingPaper />}
          </div>
        </div>
      </header>
      {isPage.isCreatedRollingListPage && <HeaderService />}
    </>
  );
}

export default Header;
