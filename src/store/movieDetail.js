import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  movieMainInfo: {},
  movieCredits: [],
  movieSimilar: [],
  loading: false,
};

export const fetchMovieDetailData = createAsyncThunk(
  "movieDetail/fetchMovieDetailData",
  async (id, thunkAPI) => {
    const fetchData = async () => {
      const movieMainInfo = await axiosInstance.get(`movie/${id}`);
      const movieCredits = await axiosInstance.get(`movie/${id}/credits`);
      const movieSimilar = await axiosInstance.get(
        `movie/${id}/similar?page=20`
      );

      return {
        movieMainInfo: movieMainInfo.data,
        movieCredits: {
          cast: movieCredits.data.cast.slice(0, 15),
          crew: movieCredits.data.crew.filter(
            (crew) => crew["department"] === "Directing"
          ),
        },
        movieSimilar: movieSimilar.data.results,
      };
    };

    try {
      const movieDetailData = await fetchData();
      return movieDetailData;
    } catch (error) {
      console.error(error);
    }
  }
);

const movieDetailSlice = createSlice({
  name: "MovieDetail",
  initialState,
  extraReducers: {
    [fetchMovieDetailData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovieDetailData.fulfilled]: (state, action) => {
      state.movieMainInfo = action.payload.movieMainInfo;
      state.movieCredits = action.payload.movieCredits;
      state.movieSimilar = action.payload.movieSimilar;
      state.loading = false;
    },
    [fetchMovieDetailData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default movieDetailSlice;
