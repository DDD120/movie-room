import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  nowPlaying: [],
  popular: [],
  topRate: [],
  upcoming: [],
};

const movieListSlice = createSlice({
  name: "MovieList",
  initialState,
  reducers: {
    fetchMovieList(state, action) {
      state.nowPlaying = action.payload.nowPlaying;
      state.popular = action.payload.popular;
      state.topRate = action.payload.topRate;
      state.upcoming = action.payload.upcoming;
    },
  },
});

export const fetchMovieListData = () => {
  return async (dispatch) => {
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
      console.log(movieListData);
      dispatch(movieListSlice.actions.fetchMovieList(movieListData));
    } catch (error) {
      console.error(error);
    }
  };
};

export default movieListSlice;
