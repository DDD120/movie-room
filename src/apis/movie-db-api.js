import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DEFAULT_PARAMS = `api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=ko-KR`;

export const moviedbApi = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_THE_MOVIE_DB_API_HOST}`,
  }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query({
      query: () => ({ url: `movie/now_playing?${DEFAULT_PARAMS}` }),
      transformResponse: (response) => response.results,
    }),
    getPopular: builder.query({
      query: () => ({ url: `movie/popular?${DEFAULT_PARAMS}` }),
      transformResponse: (response) => response.results,
    }),
    getTopRated: builder.query({
      query: () => ({ url: `movie/top_rated?${DEFAULT_PARAMS}` }),
      transformResponse: (response) => response.results,
    }),
    getUpcoming: builder.query({
      query: () => ({ url: `movie/upcoming?${DEFAULT_PARAMS}` }),
      transformResponse: (response) => response.results,
    }),
    getMainInfo: builder.query({
      query: (id) => ({ url: `movie/${id}?${DEFAULT_PARAMS}` }),
    }),
    getCredits: builder.query({
      query: (id) => ({ url: `movie/${id}/credits?${DEFAULT_PARAMS}` }),
      transformResponse: (response) => {
        return {
          cast: response.cast.slice(0, 15),
          crew: response.crew.filter(
            (crew) => crew["department"] === "Directing"
          ),
        };
      },
    }),
    getSimilar: builder.query({
      query: (id) => ({ url: `movie/${id}/similar?page=20&${DEFAULT_PARAMS}` }),
      transformResponse: (response) => response.results,
    }),
    getSearch: builder.query({
      query: ({ query, page = 1 }) => ({
        url: `search/movie?query=${query}&page=${page}&${DEFAULT_PARAMS}`,
      }),
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetUpcomingQuery,
  useGetMainInfoQuery,
  useGetCreditsQuery,
  useGetSimilarQuery,
  useLazyGetSearchQuery,
} = moviedbApi;
