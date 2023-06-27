import { createSlice } from "@reduxjs/toolkit";
const state = {
  nameBox: ["USD", "EUR", "PLN", "GBP"],
  currencyBox: [],
  arrRate: ["USD", "EUR", "PLN", "GBP"],
  valueInput: 0,
  valueResult: 0,
  multiplic: 0,
  divide: 0,
};

const inputSlice = createSlice({
  name: "exchange",
  initialState: state,
  reducers: {
    countryState: (state, action) => {
      state.currencyBox = action.payload.filter((e) =>
        state.nameBox.includes(e.cc)
      );
      state.arrRate = state.arrRate.map((e) => {
        return +state.currencyBox.filter((k) => k.cc == e)[0].rate;
      });
      state.arrRate.unshift(1);
      console.log(state.arrRate.slice());
    },
    pushStateValue: (state, action) => {
      state.valueInput = +action.payload;
      state.valueResult =
        (state.valueInput * state.arrRate[state.multiplic]) /
        state.arrRate[state.divide];
    },
    exchangeValueUp: (state, action) => {
      state.multiplic = action.payload;
    },
    exchangeValueDown: (state, action) => {
      state.divide = action.payload;
    },
  },
});

export const {
  countryState,
  pushStateValue,
  exchangeValueUp,
  exchangeValueDown,
} = inputSlice.actions;

export default inputSlice.reducer;
