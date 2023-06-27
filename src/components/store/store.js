import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "./moneySlice";
import inputSlice from "./exchangeSlice";
export default configureStore({
  reducer: {
    money: buttonSlice,
    exchange: inputSlice,
  },
});
