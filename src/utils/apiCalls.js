import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

let token = localStorage.getItem('token')
  ? `Bearer ${localStorage.getItem('token')}`
  : null

console.log(token)

export const getToken = () => token

export const setToken = newToken => {
  token = `Bearer ${newToken}`
  localStorage.setItem('token', newToken)
}

export const deleteToken = () => {
  token = null
  localStorage.removeItem('token')
}

const api = axios.create({
  baseURL: API_URL,
})

export const apiBudget = {
  getAll: () => api.get('/budget', { headers: { Authorization: token } }),
  getById: id =>
    api.get(`/budget/${id}`, { headers: { Authorization: token } }),
  create: data =>
    api.post('/budget', data, { headers: { Authorization: token } }),
  update: ({ id, data }) =>
    api.patch(`/budget/${id}`, data, { headers: { Authorization: token } }),
  delete: id =>
    api.delete(`/budget/${id}`, { headers: { Authorization: token } }),
}

export const apiCategory = {
  getAll: () => api.get('/categories', { headers: { Authorization: token } }),
  getWeek: () =>
    api.get('/categories/week', { headers: { Authorization: token } }),
  getMonth: () =>
    api.get('/categories/month', { headers: { Authorization: token } }),
  create: data =>
    api.post('/categories', data, { headers: { Authorization: token } }),
  update: (id, data) =>
    api.patch(`/categories/${id}`, data, { headers: { Authorization: token } }),
  delete: id =>
    api.delete(`/categories/${id}`, { headers: { Authorization: token } }),
}

export const apiSaving = {
  getAll: () => api.get('/saving', { headers: { Authorization: token } }),
  getById: id =>
    api.get(`/saving/${id}`, { headers: { Authorization: token } }),
  create: data =>
    api.post('/saving', data, { headers: { Authorization: token } }),
  update: ({ id, data }) => {
    console.log('axios', id, data)
    api.patch(`/saving/${id}`, data, { headers: { Authorization: token } })
  },
  delete: id =>
    api.delete(`/saving/${id}`, { headers: { Authorization: token } }),
}

export const apiTransaction = {
  getAll: () => api.get('/transactions', { headers: { Authorization: token } }),
  getLast: () =>
    api.get('/transactions/transaction/last', {
      headers: { Authorization: token },
    }),
  getFiltered: query =>
    api.get(`/transactions?${query}`, { headers: { Authorization: token } }),
  getById: id =>
    api.get(`/transactions/${id}`, { headers: { Authorization: token } }),
  create: data => {
    console.log({ data })
    api.post('/transactions', data, { headers: { Authorization: token } })
  },
  update: (id, data) =>
    api.patch(`/transactions/${id}`, data, {
      headers: { Authorization: token },
    }),
  delete: id =>
    api.delete(`/transactions/${id}`, { headers: { Authorization: token } }),
}

export const apiUser = {
  login: ({ email, password }) =>
    api
      .post('/auth/login', { email, password })
      .then(response => setToken(response.data)),
  register: data =>
    api.post('/user', data).then(response => setToken(response.data)),
  logout: deleteToken,
  getProfile: () => api.get('/user', { headers: { Authorization: token } }),
  updateProfile: data =>
    api.patch('/user/profile', data, { headers: { Authorization: token } }),
  subscribe: data =>
    api.post('/user/subscribe', data, { headers: { Authorization: token } }),
  unsubscribe: () =>
    api.post('/user/unsubscribe', { headers: { Authorization: token } }),
}

// Needed for admin panel
export const apiAdmin = {
  getAllUsers: () =>
    api.get('/admin/users', { headers: { Authorization: token } }),
  getUserById: id =>
    api.get(`/admin/users/${id}`, { headers: { Authorization: token } }),
  cancelSubscrition: id =>
    api.post(`/admin/subscription/${id}`, {
      headers: { Authorization: token },
    }),
  extendSubscrition: (id, days) =>
    api.post(`/admin/subscription/${id}`, days, {
      headers: { Authorization: token },
    }),
}
