import React from "react";
import styles from "./Button.module.scss";
import { useDispatch,useSelector } from "react-redux";
import { pushIdButton } from "../../../store/moneySlice";
import {
  exchangeValueDown,
  exchangeValueUp,
  pushStateValue
} from "../../../store/exchangeSlice";
const Button = (props) => {
  const { iconButton, id, active, isUp } = props;
  const exchangeSlice = useSelector((store) => store.exchange);

  const dispatch = useDispatch();

  const handleClickButton = () => {
    
    dispatch(pushIdButton({ id, isUp }));
    if (isUp) dispatch(exchangeValueUp(id));
    else dispatch(exchangeValueDown(id));
    dispatch(pushStateValue(exchangeSlice.valueInput))
  };

  const buttonStyle = active ? styles.Focus : styles.Button;

  return (
    <button className={buttonStyle} tabIndex="1" id={id} onClick={handleClickButton}>
      {iconButton}
    </button>
  );
};

export default Button;
