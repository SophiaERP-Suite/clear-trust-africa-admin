
import type { OrganisationTypeDto, CreateOrganisationTypeDto, UpdateOrganisationTypeDto } from "../types/controlPanel/organisationType";
import api from "./axios";

export const getAllOrganisationTypes = async () => {
  const response = await api.get<OrganisationTypeDto[]>(`/api/admin/OrganisationType/GetAll`);
  return response.data;
};

export const createOrganisationType = async (data: CreateOrganisationTypeDto) => {
  const response = await api.post("/api/admin/OrganisationType/register", data);
  return response.data;
};

export const deleteOrganisationType = async (id: number) => {
  const response = await api.put(`/api/admin/OrganisationType/${id}/delete`);
  return response.data;
};

export const updateOrganisationType = async (id: number, data: UpdateOrganisationTypeDto) => {
  const response = await api.put(`/api/admin/OrganisationType/${id}/update`, data);
  return response.data;
};
