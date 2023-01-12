import { createSlice } from "@reduxjs/toolkit";

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
      state.user = action.payload.user;
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

export const { login, logout, setUser } = userSlice.actions;

export default userSlice.reducer;
