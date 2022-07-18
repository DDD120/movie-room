import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieList";
import movieDetailSlice from "./movieDetail";
import searchResultsSlice from "./searchResults";
import userSlice from "./user";

const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    searchResults: searchResultsSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
