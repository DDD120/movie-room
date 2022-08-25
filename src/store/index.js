import { configureStore } from "@reduxjs/toolkit";
import { serverApi } from "apis/server-api";
import { moviedbApi } from "apis/movie-db-api";
import userReducer from "./user";

const store = configureStore({
  reducer: {
    user: userReducer,
    [serverApi.reducerPath]: serverApi.reducer,
    [moviedbApi.reducerPath]: moviedbApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat(serverApi.middleware, moviedbApi.middleware),
});

export default store;
