import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  certificationNumber: "",
};

const signupSlice = createSlice({
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

export const { saveData } = signupSlice.actions;
export default signupSlice;
