import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "api";

const initialState = {
  movieDetail: {},
};

const movieDetailSlice = createSlice({
  name: "MovieDetail",
  initialState,
  reducers: {
    fetchMovieDetail(state, action) {
      state.movieDetail = action.payload.movieDetail;
    },
  },
});

export const fetchMovieDetailData = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const movieDetail = await axiosInstance.get(`movie/${id}`);
      return {
        movieDetail: movieDetail.data,
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
