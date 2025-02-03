import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const includeTokenToQueries = (headers, { getState }) => {
  const state = getState();
  let token = state.auth.userData?.accessToken;

  // If the token is not yet in Redux state, fall back to localStorage
  if (!token) {
    token = JSON.parse(localStorage.getItem("user"))?.accessToken;
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return headers;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://personalblog-mov8.onrender.com/api/",
    prepareHeaders: (headers, { getState }) => {
      return includeTokenToQueries(headers, { getState });
    },
    // Add this line to include credentials (cookies) in the requests
    credentials: "include", // This will send cookies with requests
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "users/login",
        method: "POST",
        body: loginData,
      }),
    }),
    signUpUser: builder.mutation({
      query: (signUpData) => ({
        url: "users/signup",
        method: "POST",
        body: signUpData,
      }),
    }),
    publishBlog: builder.mutation({
      query: (blogData) => ({
        url: "admin/post",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `delete/${blogId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
    getAllBlogs: builder.query({
      query: () => ({
        url: "blogs",
      }),
      providesTags: ["Blogs"],
    }),
    getBlogById: builder.query({
      query: (id) => ({
        url: `blogs/${id}`,
      }),
      providesTags: ["Blogs"],
    }),
    likeBlogPost: builder.mutation({
      query: (postData) => ({
        url: `blogs/like`,
        method: "PATCH",
        body: postData,
      }),
      invalidatesTags: ["Blogs"],
    }),
    postMessage: builder.mutation({
      query: (messageData) => ({
        url: `post/message`,
        method: "POST",
        body: messageData,
      }),
      invalidatesTags: ["Messages"],
    }),
    getAllMessages: builder.query({
      query: () => ({
        url: `messages/allmessages`,
      }),
      providesTags: ["Messages"],
    }),
    postComment: builder.mutation({
      query: ({ id, ...commentData }) => ({
        url: `post/comment/${id}`,
        method: "PATCH",
        body: commentData,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetAllBlogsQuery,
  useSignUpUserMutation,
  useGetBlogByIdQuery,
  usePublishBlogMutation,
  useLikeBlogPostMutation,
  usePostMessageMutation,
  useGetAllMessagesQuery,
  useDeleteBlogMutation,
  usePostCommentMutation,
} = apiSlice;
