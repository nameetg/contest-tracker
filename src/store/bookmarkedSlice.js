import { createSlice } from "@reduxjs/toolkit";

const bookmarkedSlice = createSlice({
  name: "bookmarked",
  initialState: [],
  reducers: {
    addContest: (state, action) => {
      state.push(action.payload);
    },
    removeContest: (state, action) => {
      return state.filter((contest) => contest.id !== action.payload);
    },
  },
});

export const bookmarkedActions = bookmarkedSlice.actions;

export default bookmarkedSlice;
