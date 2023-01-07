import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
  }),
  tagTypes: ["User"],
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
      transformResponse: (response) => response.review,
      providesTags: ["Review"],
    }),
    createReview: builder.mutation({
      query: (body) => ({
        url: "review",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Review"],
    }),
    deleteReview: builder.mutation({
      query: ({ id }) => ({ url: `review/${id}`, method: "DELETE" }),
      invalidatesTags: ["Review"],
    }),
    updateReview: builder.mutation({
      query: (body) => ({ url: "review", method: "PATCH", body }),
      invalidatesTags: ["Review"],
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
  useUpdateReviewMutation,
} = serverApi;
