import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    profile: {
      nickname: "",
      thumbnail: "",
    },
    verified: false,
    reviews: [],
    id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      console.log(state, action);
      state.user = action.payload;
    },
  },
});

export const { updateUserState } = userSlice.actions;

export default userSlice.reducer;
