import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getPosts = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(`${API_BASE_URL}/posts`, postData);
  return response.data;
};

export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_BASE_URL}/posts/${postId}`, postData);
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_BASE_URL}/posts/${postId}`);
  return response.data;
};