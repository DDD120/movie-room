import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  searchModalList: [],
  searchList: [],
  loading: false,
};

export const fetchSearchModalListData = createAsyncThunk(
  "searchResults/fetchSearchModalListData",
  async (query, thunkAPI) => {
    const fetchData = async () => {
      const searchModalList = await axiosInstance.get(
        `search/movie?query=${query}`
      );
      return {
        searchModalList: searchModalList.data.results,
      };
    };
    try {
      const searchModalListData = await fetchData();
      return searchModalListData;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchSearchListData = createAsyncThunk(
  "searchResults/fetchSearchListData",
  async (query, thunkAPI) => {
    const fetchData = async () => {
      const searchList = await axiosInstance.get(`search/movie?query=${query}`);
      return {
        searchList: searchList.data,
      };
    };
    try {
      const searchListData = await fetchData();
      return searchListData;
    } catch (error) {
      console.error(error);
    }
  }
);

const searchResultsSlice = createSlice({
  name: "SearchResults",
  initialState,
  reducers: {
    resetList(state) {
      state.searchModalList = [];
      state.loading = false;
    },
  },
  extraReducers: {
    [fetchSearchModalListData.pending]: (state) => {
      state.loading = true;
    },
    [fetchSearchModalListData.fulfilled]: (state, action) => {
      state.searchModalList = action.payload.searchModalList;
      state.loading = false;
    },
    [fetchSearchModalListData.rejected]: (state) => {
      state.loading = false;
    },
    [fetchSearchListData.pending]: (state) => {
      state.loading = true;
    },
    [fetchSearchListData.fulfilled]: (state, action) => {
      state.searchList = action.payload.searchList;
      state.loading = false;
    },
    [fetchSearchListData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { resetList } = searchResultsSlice.actions;
export default searchResultsSlice;
