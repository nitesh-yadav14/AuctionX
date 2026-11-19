import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAdminDashboard, getAllUsers } from "../services/admin.service.js";

export const useAdminDashboard = () => {
  return useQuery({
    queryKey: ["adminDashboard"],
    queryFn: getAdminDashboard,
  });
};

export const useGetAllUsers = (
  page = 1,
  search = "",
  role = "all",
  limit = 10,
  sortBy = "createdAt",
  sortOrder = "desc",
) => {
  return useQuery({
    queryKey: ["allUsers", page, search, role, limit, sortBy, sortOrder],
    queryFn: () => getAllUsers(page, search, role, limit, sortBy, sortOrder),
    placeholderData: keepPreviousData,
  });
};
