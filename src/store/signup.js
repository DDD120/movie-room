import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServer } from "api";

const initialState = {
  email: "",
  password: "",
  response: {},
  loading: false,
};

export const sendEmailCertificationNumber = createAsyncThunk(
  "signup/sendEmailCertificationNumber",
  async (email, ThunkAPI) => {
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

export const requestSignup = createAsyncThunk(
  "signup/requestSignup",
  async ({ email, password, certificationNumber }, ThunkAPI) => {
    const fetchData = async () => {
      const response = await fetchServer.post("user/signup", {
        email,
        password,
        inputNumber: certificationNumber,
      });

      console.log(response);
      return response;
    };
    try {
      const response = await fetchData();
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
    setEmailPassword(state, action) {
      console.log(action);
      state.email = action.payload.email;
      state.password = action.payload.password;
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
    [requestSignup.pending]: (state) => {
      state.loading = true;
    },
    [requestSignup.fulfilled]: (state, action) => {
      state.response = action.payload.response;
      state.loading = false;
    },
    [requestSignup.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setEmailPassword } = signupSlice.actions;
export default signupSlice;
