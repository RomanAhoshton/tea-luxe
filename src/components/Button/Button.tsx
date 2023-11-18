import React from "react";
import styles from "./index.module.scss";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  

  return (
    <button
      className={styles.button}
      
    >
      {text}
    </button>
  );
};

export default Button;
