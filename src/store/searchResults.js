import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTheMovieDB } from "api";

const initialState = {
  searchModalList: [],
  searchList: [],
  totalResults: 0,
  totalPage: 0,
  currentPage: 1,
  loading: false,
};

export const fetchSearchModalListData = createAsyncThunk(
  "searchResults/fetchSearchModalListData",
  async (query, thunkAPI) => {
    const fetchData = async () => {
      const searchModalList = await fetchTheMovieDB.get(
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
  async (userData, thunkAPI) => {
    const fetchData = async () => {
      const { searchKeyword, currentPage } = userData;
      const searchList = await { fetchTheMovieDB }.get(
        `search/movie?query=${searchKeyword}&page=${currentPage}`
      );
      return {
        searchList: searchList.data.results,
        totalResults: searchList.data.total_results,
        totalPage: searchList.data.total_pages,
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
    resetModalList(state) {
      state.searchModalList = [];
    },
    resetSearchPage(state) {
      state.searchList = [];
      state.currentPage = 1;
    },
    increaseCurrentPage(state) {
      state.currentPage = state.currentPage + 1;
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
      state.searchList = state.searchList.concat(action.payload.searchList);
      state.totalResults = action.payload.totalResults;
      state.totalPage = action.payload.totalPage;
      state.loading = false;
    },
    [fetchSearchListData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { resetSearchPage, resetModalList, increaseCurrentPage } =
  searchResultsSlice.actions;
export default searchResultsSlice;
