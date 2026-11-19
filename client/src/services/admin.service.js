import { api } from "../config/api.js";

// Get admin dashboard statistics
export const getAdminDashboard = async () => {
  const res = await api.get(`/admin/dashboard`);
  return res.data;
};

// Get users with pagination, search, role filter and sorting
export const getAllUsers = async (
  page = 1,
  search = "",
  role = "all",
  limit = 10,
  sortBy = "createdAt",
  sortOrder = "desc",
) => {
  const res = await api.get(`/admin/users`, {
    params: { page, search, role, limit, sortBy, sortOrder },
  });
  return res.data;
};
