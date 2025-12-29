
import type { RolePermissionsDto, CreateRolePermissionsDto, UpdateRolePermissionsDto } from "../types/Rolepermissions";
import api from "./axios";

export const getAllRolePermissions = async () => {
  const response = await api.get<RolePermissionsDto[]>(
    `/api/admin/RolePermission/GetAll`
  );
  return response.data;
};

export const createRolePermission = async (data: CreateRolePermissionsDto) => {
  const response = await api.post("/api/admin/RolePermission/register", data);
  return response.data;
};

export const deleteRolePermission = async (id: number) => {
  const response = await api.put(`/api/admin/RolePermission/${id}/delete`);
  return response.data;
};

export const updateRolePermission = async (
  id: number,
  data: UpdateRolePermissionsDto
) => {
  const response = await api.put(`/api/admin/RolePermission/${id}/update`, data);
  return response.data;
};
