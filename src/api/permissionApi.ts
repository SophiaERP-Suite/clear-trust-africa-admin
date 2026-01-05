import type {
  CreatePermissionsDto,
  PermissionsDto,
} from "../types/controlPanel/permissions";
import type { UpdatePermissionsDto } from "../types/controlPanel/permissions";
import api from "./axios";

export const getAllPermissions = async () => {
  const response = await api.get<PermissionsDto[]>(
    `/api/admin/Permission/GetAll`
  );
  return response.data;
};

export const createPermission = async (data: CreatePermissionsDto) => {
  const response = await api.post("/api/admin/Permission/register", data);
  return response.data;
};

export const deletePermission = async (id: number) => {
  const response = await api.put(`/api/admin/Permission/${id}/delete`);
  return response.data;
};

export const updatePermission = async (
  id: number,
  data: UpdatePermissionsDto
) => {
  const response = await api.put(`/api/admin/Permission/${id}/update`, data);
  return response.data;
};
