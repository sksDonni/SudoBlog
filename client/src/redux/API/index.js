import axios from "axios";

const baseUrl = "http://localhost:5000/";
const postsUrl = "http://localhost:5000/posts";
const authUrl = "http://localhost:5000/auth";
const subgroupUrl = "http://localhost:5000/subgroup";

const API = axios.create({ baseUrl });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
    console.log(req.headers.Authorization);
  }
  return req;
});

export const getPosts = () => API.get(`${postsUrl}/`);
export const getPost = (postId) => API.get(`${postsUrl}/${postId}`);
export const addPost = (post) => API.post(postsUrl, post);
export const deletePost = (postId) => API.delete(`${postsUrl}/${postId}`);
export const updatePost = (postId, post) =>
  API.put(`${postsUrl}/${postId}`, post);

export const getPostsByGroupName = (name) =>
  API.get(`${postsUrl}/subgroup/${name}`);

export const likePost = (postId, userId) =>
  API.post(`${postsUrl}/${postId}/like`, userId);
export const dislikePost = (postId, userId) =>
  API.post(`${postsUrl}/${postId}/dislike`, userId);

export const getComments = (postId) =>
  API.get(`${postsUrl}/${postId}/comments`);
export const addComment = (comment, postId) =>
  API.post(`${postsUrl}/${postId}/comments`, comment);
export const updateComment = (postId, commentId, comment, userId) =>
  API.put(`${postsUrl}/${postId}/comments`, comment, userId);
export const likeComment = (postId, commentId, userId) =>
  API.post(`${postsUrl}/${postId}/${commentId}/like`, userId);
export const dislikeComment = (postId, commentId, userId) =>
  API.post(`${postsUrl}/${postId}/${commentId}/dislike`, userId);

export const addSubgroup = (name) => API.post(subgroupUrl, name);
export const getSubgroups = () => API.get(subgroupUrl);

export const loginUser = (body) => API.post(`${authUrl}/login`, body);
export const registerUser = (body) => API.post(`${authUrl}/register`, body);
