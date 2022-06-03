import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieList";
import movieDetailSlice from "./movieDetail";

const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
  },
});

export default store;
