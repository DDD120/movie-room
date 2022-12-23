import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    email: "",
    profile: {
      nickname: "",
      thumbnail: "",
    },
    reviews: [],
  },
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
