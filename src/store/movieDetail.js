import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  movieMainInfo: {},
  movieCredits: {},
  movieSimilar: {},
};

const movieDetailSlice = createSlice({
  name: "MovieDetail",
  initialState,
  reducers: {
    fetchMovieDetail(state, action) {
      state.movieMainInfo = action.payload.movieMainInfo;
      state.movieCredits = action.payload.movieCredits;
      state.movieSimilar = action.payload.movieSimilar;
    },
  },
});

export const fetchMovieDetailData = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const movieMainInfo = await axiosInstance.get(`movie/${id}`);
      const movieCredits = await axiosInstance.get(`movie/${id}/credits`);
      const movieSimilar = await axiosInstance.get(
        `movie/${id}/similar?page=20`
      );
      console.log(movieSimilar);
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
      dispatch(movieDetailSlice.actions.fetchMovieDetail(movieDetailData));
    } catch (error) {
      console.error(error);
    }
  };
};

export default movieDetailSlice;
