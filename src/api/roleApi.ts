import type { CreateRolesDto, RolesDto } from "../types/roles";
import type { UpdateRoleDto } from "../types/roles";
import api from "./axios";

export const getAllRoles = async () => {
  const response = await api.get<RolesDto[]>(`/api/admin/roles/GetAll`);
  return response.data;
};

export const createRole = async (data: CreateRolesDto) => {
  const response = await api.post("/api/admin/roles/register", data);
  return response.data;
};

export const deleteRole = async (id: number) => {
  const response = await api.put(`/api/admin/roles/${id}/delete`);
  return response.data;
};

export const updateRole = async (id: number, data: UpdateRoleDto) => {
  const response = await api.put(`/api/admin/roles/${id}/update`, data);
  return response.data;
};
