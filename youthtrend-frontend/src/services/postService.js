import request from './api'

export const fetchPosts = () => request('/posts')

export const createPost = (content) =>
  request('/posts', { method: 'POST', body: JSON.stringify({ content }) })