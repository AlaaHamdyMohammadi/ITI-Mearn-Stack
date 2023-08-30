import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: null },
  reducers: {
    changeCounter: function (state, action) {
      state.counter = action.payload;
    },
  },
});

export const { changeCounter } = counterSlice.actions;


export default counterSlice.reducer;
