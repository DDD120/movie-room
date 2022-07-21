import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServer } from "api";

const initialState = {
  email: "",
  password: "",
  certificationNumber: "",
  response: {},
  loading: false,
};

export const sendEmailCertificationNumber = createAsyncThunk(
  "signup/sendEmailCertificationNumber",
  async (email, thunkAPI) => {
    const fetchData = async () => {
      const response = await fetchServer.post("user/email", {
        email,
      });

      return response;
    };
    try {
      const response = await fetchData();
      console.log(response);
      return {
        response: response.data,
      };
    } catch (error) {
      console.error(error);
    }
  }
);

const signupSlice = createSlice({
  name: "Signup",
  initialState,
  reducers: {
    saveData(state, action) {
      state.email = action.email;
      state.password = action.password;
      state.certificationNumber = action.certificationNumber;
    },
  },
  extraReducers: {
    [sendEmailCertificationNumber.pending]: (state) => {
      state.loading = true;
    },
    [sendEmailCertificationNumber.fulfilled]: (state, action) => {
      state.response = action.payload.response;
      state.loading = false;
    },
    [sendEmailCertificationNumber.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { saveData } = signupSlice.actions;
export default signupSlice;
