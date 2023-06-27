import React from "react";
import styles from "./Input.module.scss";
import { useDispatch } from "react-redux";
const Input = (props) => {
 
  const { style, handleClick, value,id } = props;

  return (
    <input
      type="text"
      className={style == 1 ? styles.DefauldFildHead:styles.DefauldFildBottom}
      onChange={handleClick}
      value={value}
      id={id}
    />
  );
};

export default Input;
