import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

let token = ''

const api = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${token}` },
})

export const apiBudget = {
  getAll: () => api.get('/budget'),
  getById: id => api.get(`/budget/${id}`),
  create: data => api.post('/budget', data),
  update: (id, data) => api.patch(`/budget/${id}`, data),
  delete: id => api.delete(`/budget/${id}`),
}

export const apiCategory = {
  getAll: () => api.get('/categories'),
  getWeek: () => api.get('/categories/week'),
  getMonth: () => api.get('/categories/month'),
  create: data => api.post('/categories', data),
  update: (id, data) => api.patch(`/categories/${id}`, data),
  delete: id => api.delete(`/categories/${id}`),
}

export const apiSaving = {
  getAll: () => api.get('/saving'),
  getById: id => api.get(`/saving/${id}`),
  create: data => api.post('/saving', data),
  update: (id, data) => api.patch(`/saving/${id}`, data),
  delete: id => api.delete(`/saving/${id}`),
}

export const apiTransaction = {
  getAll: () => api.get('/transactions'),
  getFiltered: query => api.get(`/transactions?${query}`),
  getById: id => api.get(`/transactions/${id}`),
  create: data => api.post('/transactions', data),
  update: (id, data) => api.patch(`/transactions/${id}`, data),
  delete: id => api.delete(`/transactions/${id}`),
}

export const apiUser = {
  login: ({ email, password }) =>
    api
      .post('/auth/login', { email, password })
      .then(response => (token = response.data)),
  register: data => api.post('/user/register', data),
  logout: () => (token = ''),
  getProfile: () => api.get('/user/profile'),
  updateProfile: data => api.patch('/user/profile', data),
  subscribe: data => api.post('/user/subscribe', data),
  unsubscribe: () => api.post('/user/unsubscribe'),
}

// Needed for admin panel
export const apiAdmin = {
  getAllUsers: () => api.get('/admin/users'),
  getUserById: id => api.get(`/admin/users/${id}`),
  cancelSubscrition: id => api.post(`/admin/subscription/${id}`),
  extendSubscrition: (id, days) => api.post(`/admin/subscription/${id}`, days),
}
