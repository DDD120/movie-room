import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  certificationNumber: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveData(state, action) {
      state.email = action.email;
      state.password = action.password;
      state.certificationNumber = action.certificationNumber;
    },
  },
});

export const { saveData } = userSlice.actions;
export default userSlice;
