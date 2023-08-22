import axios from "axios";
const API_URL = import.meta.env.API_URL;

const MOCK = "https://my-json-server.typicode.com/STAGGI-Develop/mock";
const api = axios.create({ baseURL: MOCK });

export const apiBudget = {
  getAll: () => api.get("/budgets"),
  getById: (id) => api.get(`/budgets/${id}`),
  create: (data) => api.post("/budgets", data),
  update: (id, data) => api.put(`/budgets/${id}`, data),
  delete: (id) => api.delete(`/budgets/${id}`),
};

export const apiCategory = {
  getAll: () => api.get("/categories"),
  create: (data) => api.post("/categories", data),
  update: (id, data) => api.put(`/categories/${id}`, data),
  delete: (id) => api.delete(`/categories/${id}`),
};

export const apiSaving = {
  getAll: () => api.get("/savings"),
  getById: (id) => api.get(`/savings/${id}`),
  create: (data) => api.post("/savings", data),
  update: (id, data) => api.put(`/savings/${id}`, data),
  delete: (id) => api.delete(`/savings/${id}`),
};

export const apiTransaction = {
  getAll: () => api.get("/transactions"),
  getById: (id) => api.get(`/transactions/${id}`),
  create: (data) => api.post("/transactions", data),
  update: (id, data) => api.put(`/transactions/${id}`, data),
  delete: (id) => api.delete(`/transactions/${id}`),
};

export const apiUser = {
  login: (email, password) => api.post("/auth/", { email, password }),
  logout: () => api.post("/auth"),
  getProfile: () => api.get("/user/profile"),
  updateProfile: (data) => api.put("/user/profile", data),
  subscribe: (data) => api.post("/user/subscribe", data),
  unsubscribe: () => api.post("/user/unsubscribe"),
};

// Needed for admin panel
const apiAdmin = {
  getAllUsers: () => api.get("/admin/users"),
  getUserById: (id) => api.get(`/admin/users/${id}`),
  cancelSubscrition: (id) => api.post(`/admin/subscription/${id}`),
  extendSubscrition: (id, days) =>
    api.post(`/admin/subscription/${id}`, days),
};