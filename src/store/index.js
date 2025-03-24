import { configureStore } from "@reduxjs/toolkit";
import pastContestsSlice from "./pastContestsSlice";
import upcomingContestsSlice from "./upcomingContestsSlice";
import bookmarkedSlice from "./bookmarkedSlice";

const contestTrackerStore = configureStore({
  reducer: {
    upcomingContests: upcomingContestsSlice.reducer,
    pastContests: pastContestsSlice.reducer,
    bookmarked: bookmarkedSlice.reducer,
  },
});

export default contestTrackerStore;
