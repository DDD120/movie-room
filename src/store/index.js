import { configureStore } from "@reduxjs/toolkit";
import movieListSlice from "./movieList";
import movieDetailSlice from "./movieDetail";
import searchResultsSlice from "./searchResults";
import signupSlice from "./signup";
import { serverApi } from "apis/server-api";

const store = configureStore({
  reducer: {
    movieList: movieListSlice.reducer,
    movieDetail: movieDetailSlice.reducer,
    searchResults: searchResultsSlice.reducer,
    signup: signupSlice.reducer,
    [serverApi.reducerPath]: serverApi.reducer,
  },
  middleware: (gDM) => gDM().concat(serverApi.middleware),
});

export default store;
