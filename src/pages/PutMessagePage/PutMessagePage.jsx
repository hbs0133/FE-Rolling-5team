import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PutMessagePage.module.scss";
import PutMessageForm from "./components/PutMessageForm/PutMessageForm";

const PutMessagePage = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <PutMessageForm id={id} />
    </div>
  );
};

export default PutMessagePage;
