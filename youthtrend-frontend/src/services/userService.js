import request from './api'

export const fetchCurrentUser = () => request('/users/me')

export const updateCurrentUser = (data) =>
  request('/users/me', { method: 'PUT', body: JSON.stringify(data) })