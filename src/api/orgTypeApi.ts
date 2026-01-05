
import type { OrganizationTypeDto, CreateOrganizationTypeDto, UpdateOrganizationTypeDto } from "../types/controlPanel/organizationType";
import api from "./axios";

export const getAllOrganizationTypes = async () => {
  const response = await api.get<OrganizationTypeDto[]>(`/api/admin/OrganizationType/GetAll`);
  return response.data;
};

export const createOrganizationType = async (data: CreateOrganizationTypeDto) => {
  const response = await api.post("/api/admin/OrganizationType/register", data);
  return response.data;
};

export const deleteOrganizationType = async (id: number) => {
  const response = await api.put(`/api/admin/OrganizationType/${id}/delete`);
  return response.data;
};

export const updateOrganizationType = async (id: number, data: UpdateOrganizationTypeDto) => {
  const response = await api.put(`/api/admin/OrganizationType/${id}/update`, data);
  return response.data;
};
