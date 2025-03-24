import { createSlice } from "@reduxjs/toolkit";

const upcomingContestsSlice = createSlice({
  name: "upcomingContests",
  initialState: [],
  reducers: {
    addContests: (state, action) => {
      // console.log("uc", action.payload);
      return action.payload;
    },
  },
});

export const upcomingContestsActions = upcomingContestsSlice.actions;

export default upcomingContestsSlice;
