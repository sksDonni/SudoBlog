import axios from 'axios'

const baseUrl = 'http://localhost:5000/'
const postsUrl = 'http://localhost:5000/posts'
const authUrl = 'http://localhost:5000/auth'

const API = axios.create({baseUrl});

export const getPosts = () => API.get(`${postsUrl}/`)
export const getPost = (postId) => API.get(`${postsUrl}/${postId}`)
export const addPost = (post) => API.post(postsUrl, post);
export const deletePost = (postId) => API.delete(`${postsUrl}/${postId}`)
export const updatePost = (postId, post) => API.put(`${postsUrl}/${postId}`)

export const likePost = (postId, userId) => API.post(`${postsUrl}/${postId}/like`, userId)
export const dislikePost = (postId, userId) => API.post(`${postsUrl}/${postId}/dislike`, userId)

export const getComments = (postId) => API.get(`${postsUrl}/${postId}/comments`);
export const addComment = (postId, comment, userId) => API.post(`${postsUrl}/${postId}/comment`, comment, userId);
export const updateComment = (postId, commentId, comment, userId,) => API.put(`${postsUrl}/${postId}/comment`, comment, userId)
export const LikeComment = (postId, commentId, userId) => API.post(`${postsUrl}/${postId}/${commentId}/like`, userId)
export const dislikeComment = (postId, commentId, userId) => API.post(`${postsUrl}/${postId}/${commentId}/dislike`, userId)
