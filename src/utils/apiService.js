import axios from "axios";

const API_URL = import.meta.env.API_URL;

const call = (method, url, data = null) => {
  return axios[method](`${API_URL}${url}`, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const apiService = {
  budget,
  category,
  saving,
  transaction,
  user,
};

export default apiService;

const budget = {
  getAllBudgets: () => call("get", "/budgets"),
  getBudgetById: (id) => call("get", `/budgets/${id}`),
  createBudget: (data) => call("post", "/budgets", data),
  updateBudget: (id, data) => call("put", `/budgets/${id}`, data),
  deleteBudget: (id) => call("delete", `/budgets/${id}`),
};

const category = {
  getAllCategories: () => call("get", "/categories"),
  createCategory: (data) => call("post", "/categories", data),
  updateCategory: (id, data) => call("put", `/categories/${id}`, data),
  deleteCategory: (id) => call("delete", `/categories/${id}`),
};

const saving = {
  getAllSavings: () => call("get", "/savings"),
  getSavingById: (id) => call("get", `/savings/${id}`),
  createSaving: (data) => call("post", "/savings", data),
  updateSaving: (id, data) => call("put", `/savings/${id}`, data),
  deleteSaving: (id) => call("delete", `/savings/${id}`),
};

const transaction = {
  getAllTransactions: () => call("get", "/transactions"),
  getTransactionById: (id) => call("get", `/transactions/${id}`),
  createTransaction: (data) => call("post", "/transactions", data),
  updateTransaction: (id, data) => call("put", `/transactions/${id}`, data),
  deleteTransaction: (id) => call("delete", `/transactions/${id}`),
};

const user = {
  login: (email, password) => call("post", "/auth/", { email, password }),
  logout: () => call("post", "/auth"),
  getUserProfile: () => call("get", "/user/profile"),
  updateUserProfile: (data) => call("put", "/user/profile", data),
  subscribeToPremium: () => call("post", "/user/subscribe"),
  unsubscribeToPremium: () => call("post", "/user/unsubscribe"),
};

// Needed for admin panel
const admin = {
  getAllUsers: () => call("get", "/admin/users"),
  getUserById: (id) => call("get", `/admin/users/${id}`),
  cancelSubscrition: (id) => call("post", `/admin/subscription/${id}`),
  extendSubscrition: (id, days) => call("post", `/admin/subscription/${id}`, days),
};
