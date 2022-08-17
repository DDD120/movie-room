import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from "apis/server-api";
import { moviedbApi } from "apis/movie-db-api";

const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
    [moviedbApi.reducerPath]: moviedbApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(serverApi.middleware, moviedbApi.middleware),
});

export default store;
