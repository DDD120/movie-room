import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serverApi = createApi({
  reducerPath: "serverApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
  }),
  tagTypes: ["User", "Review"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "user/signin",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
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
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "user/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    signout: builder.mutation({
      query: (body) => ({
        url: "user",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["User"],
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
  useLogoutMutation,
  useEmailMutation,
  useSignupMutation,
  useCheckTokenQuery,
  useUpdateProfileMutation,
  useSignoutMutation,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} = serverApi;
