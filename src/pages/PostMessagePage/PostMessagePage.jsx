import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostMessagePage.module.scss";
import PostMessageForm from "./components/PostMessageForm/PostMessageForm";

const PostMessagePage = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <PostMessageForm id={id} />
    </div>
  );
};

export default PostMessagePage;
