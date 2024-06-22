import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PutMessagePage.module.scss";
import PutMessageForm from "./components/PutMessageForm/PutMessageForm";
import { useTheme } from "../../components/UI/Theme/ThemeContext";

const PutMessagePage = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const themeStyle = styles[`${theme}-theme`];
  return (
    <div className={`${styles.container} ${themeStyle}`}>
      <PutMessageForm id={id} />
    </div>
  );
};

export default PutMessagePage;
