import React from "react";
import styles from "../../PutMessagePage.module.scss";

const InputSection = ({ label, inputElement }) => {
  return (
    <div className={styles["input-wrapper"]}>
      <label>{label}</label>
      {inputElement}
    </div>
  );
};

export default InputSection;
