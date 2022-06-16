import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRate: [],
  upcoming: [],
  loading: false,
};

export const fetchMovieListData = createAsyncThunk(
  "movieList/fetchMovieListData",
  async (thunkAPI) => {
    const fetchData = async () => {
      const nowPlaying = await axiosInstance.get("movie/now_playing");
      const popular = await axiosInstance.get("movie/popular");
      const topRate = await axiosInstance.get("movie/top_rated");
      const upcoming = await axiosInstance.get("movie/upcoming");

      return {
        nowPlaying: nowPlaying.data.results,
        popular: popular.data.results,
        topRate: topRate.data.results,
        upcoming: upcoming.data.results,
      };
    };

    try {
      const movieListData = await fetchData();
      return movieListData;
    } catch (error) {
      console.error(error);
    }
  }
);

const movieListSlice = createSlice({
  name: "MovieList",
  initialState,
  extraReducers: {
    [fetchMovieListData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovieListData.fulfilled]: (state, action) => {
      state.nowPlaying = action.payload.nowPlaying;
      state.popular = action.payload.popular;
      state.topRate = action.payload.topRate;
      state.upcoming = action.payload.upcoming;
      state.loading = false;
    },
    [fetchMovieListData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default movieListSlice;
