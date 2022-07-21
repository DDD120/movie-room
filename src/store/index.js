import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieList";
import movieDetailSlice from "./movieDetail";
import searchResultsSlice from "./searchResults";
import signupSlice from "./signup";

const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    searchResults: searchResultsSlice.reducer,
    signup: signupSlice.reducer,
  },
});

export default store;
