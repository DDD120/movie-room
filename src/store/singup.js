import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchServer } from "api";

const initialState = {
  email: "",
  password: "",
  certificationNumber: "",
  responese: "",
  loading: false,
};

export const sendEmailCertificationNumber = createAsyncThunk(
  "signup/sendEmailCertificationNumber",
  async (email, thunkAPI) => {
    const fetchData = async () => {
      const responese = await fetchServer.post("user/email", {
        email,
      });
      console.log(responese);
      return responese.data;
    };
    try {
      return await fetchData();
    } catch (error) {
      console.error(error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    saveData(state, action) {
      state.email = action.email;
      state.password = action.password;
      state.certificationNumber = action.certificationNumber;
    },
    extraReducers: {
      [sendEmailCertificationNumber.pending]: (state) => {
        state.loading = true;
      },
      [sendEmailCertificationNumber.fulfilled]: (state, action) => {
        state.responese = action.payload.responese;
        state.loading = false;
      },
      [sendEmailCertificationNumber.rejected]: (state) => {
        state.loading = false;
      },
    },
  },
});

export const { saveData } = signupSlice.actions;
export default signupSlice;
