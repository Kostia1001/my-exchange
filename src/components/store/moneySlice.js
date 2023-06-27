import { createSlice } from "@reduxjs/toolkit";

const state = {
  iconCountryUp: 0,
  iconCountryDovn: 0,
  activeUp:false,
  activeDovn:false
};

const buttonSlice = createSlice({
  name: "money",
  initialState: state,
  reducers: {
    pushIdButton: (state, action) => {
      action.payload.isUp 
        ? (state.iconCountryUp = action.payload.id)
        : (state.iconCountryDovn = action.payload.id);
    },
  },
});

export const { pushIdButton } = buttonSlice.actions;

export default buttonSlice.reducer;
