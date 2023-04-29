import { createSlice } from "@reduxjs/toolkit";
import DefaultThumnailImg from "assets/default-thumbnail.png";

const initialState = {
  user: {
    id: "",
    email: "",
    nickname: "",
    thumbnail: "",
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { id, email, nickname, thumbnail } = action.payload.user;
      state.user = {
        id,
        email,
        nickname,
        thumbnail: thumbnail ? thumbnail : DefaultThumnailImg,
      };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {
        id: "",
        email: "",
        nickname: "",
        thumbnail: "",
      };
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
