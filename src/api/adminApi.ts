import type { CreateOrganisationDto, OrganisationDto } from "../types/controlPanel/organisation";
import api from "./axios";

export interface OrganisationApprovalDto {
  reason: string;
}

export const getAllOrganisations = async (status?: string, page = 1, pageSize = 20) => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());

  const response = await api.get<OrganisationDto[]>(`/api/admin/organisations?${params.toString()}`);
  return response.data;
};

export const getPendingOrganisations = async () => {
  const response = await api.get<OrganisationDto[]>('/api/admin/organisations/pending');
  return response.data;
};

export const getOrganisationById = async (id: number) => {
  const response = await api.get<OrganisationDto>(`/api/admin/organisations/${id}`);
  return response.data;
};

export const createOrganisation = async (data: CreateOrganisationDto) => {
  const response = await api.post('/api/admin/organisations/register', data);
  return response.data;
};

export const approveOrganisation = async (id: number) => {
  const response = await api.put(`/api/admin/organisations/${id}/approve`);
  return response.data;
};

export const rejectOrganisation = async (id: number, reason: string) => {
  const response = await api.put(`/api/admin/organisations/${id}/reject`, { reason });
  return response.data;
};

export const suspendOrganisation = async (id: number, reason: string) => {
  const response = await api.put(`/api/admin/organisations/${id}/suspend`, { reason });
  return response.data;
};

export const activateOrganisation = async (id: number) => {
  const response = await api.put(`/api/admin/organisations/${id}/activate`);
  return response.data;
};

export const verifyDocument = async (id: number) => {
  const response = await api.put(`/api/admin/documents/${id}/verify`);
  return response.data;
};

export const rejectDocument = async (id: number, reason: string) => {
  const response = await api.put(`/api/admin/documents/${id}/reject`, { reason });
  return response.data;
};
