import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "user/signin",
        method: "POST",
        body,
      }),
    }),
    email: builder.mutation({
      query: (body) => ({
        url: "user/email",
        method: "POST",
        body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: "user/signup",
        method: "POST",
        body,
      }),
    }),
    checkToken: builder.query({
      query: () => ({
        url: "user/token",
      }),
    }),
    getReviews: builder.query({
      query: (id) => ({ url: `review/${id}` }),
    }),
    createReview: builder.mutation({
      query: (body) => ({
        url: "review",
        method: "POST",
        body,
      }),
    }),
    deleteReview: builder.mutation({
      query: ({ id }) => ({ url: `review/${id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useLoginMutation,
  useEmailMutation,
  useSignupMutation,
  useCheckTokenQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
} = serverApi;
