import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostMessagePage.module.scss";
import PostMessageForm from "./components/PostMessageForm/PostMessageForm";
import { useTheme } from "../../components/UI/Theme/ThemeContext";

const PostMessagePage = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const themeStyle = styles[`${theme}-theme`];
  return (
    <div className={`${styles.container} ${themeStyle}`}>
      <PostMessageForm id={id} />
    </div>
  );
};

export default PostMessagePage;
