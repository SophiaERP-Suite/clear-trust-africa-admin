import type { CreateOrganizationDto } from "../types/organization";
import api from "./axios";


export interface OrganizationDto {
  id: number;
  name: string;
  status: string;
  DateCreated: string;
}

export interface OrganizationApprovalDto {
  reason: string;
}

export const getAllOrganizations = async (status?: string, page = 1, pageSize = 20) => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  params.append('page', page.toString());
  params.append('pageSize', pageSize.toString());

  const response = await api.get<OrganizationDto[]>(`/admin/organizations?${params.toString()}`);
  return response.data;
};

export const getPendingOrganizations = async () => {
  const response = await api.get<OrganizationDto[]>('/admin/organizations/pending');
  return response.data;
};

export const getOrganizationById = async (id: number) => {
  const response = await api.get<OrganizationDto>(`/admin/organizations/${id}`);
  return response.data;
};

export const createOrganization = async (data: CreateOrganizationDto) => {
  const response = await api.post('/admin/organizations/register', data);
  return response.data;
};

export const approveOrganization = async (id: number) => {
  const response = await api.put(`/admin/organizations/${id}/approve`);
  return response.data;
};

export const rejectOrganization = async (id: number, reason: string) => {
  const response = await api.put(`/admin/organizations/${id}/reject`, { reason });
  return response.data;
};

export const suspendOrganization = async (id: number, reason: string) => {
  const response = await api.put(`/admin/organizations/${id}/suspend`, { reason });
  return response.data;
};

export const activateOrganization = async (id: number) => {
  const response = await api.put(`/admin/organizations/${id}/activate`);
  return response.data;
};

export const verifyDocument = async (id: number) => {
  const response = await api.put(`/admin/documents/${id}/verify`);
  return response.data;
};

export const rejectDocument = async (id: number, reason: string) => {
  const response = await api.put(`/admin/documents/${id}/reject`, { reason });
  return response.data;
};
