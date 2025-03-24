import { createSlice } from "@reduxjs/toolkit";

const pastContestsSlice = createSlice({
  name: "pastContests",
  initialState: [],
  reducers: {
    addContests: (state, action) => {
      // console.log("past", action.payload);
      return action.payload;
    },
  },
});

export const pastContestsActions = pastContestsSlice.actions;

export default pastContestsSlice;
