import type {
  CountryDto,
  CreateStateDto,
  StateDto,
} from "../types/controlPanel/location";
import api from "./axios";

// =========== Country =============
export const getAllCountry = async () => {
  const response = await api.get<CountryDto[]>(`/api/admin/Country/GetAll`);
  return response.data;
};

// ============ State ===============
export const createState = async (data: CreateStateDto) => {
  const response = await api.post("/api/admin/State/register", data);
  return response.data;
};

export const getAllState = async (countryId: number) => {
  const response = await api.get<StateDto[]>(
    `/api/admin/State/${countryId}/GetAll`
  );
  return response.data;
};

// export const deleteRole = async (id: number) => {
//   const response = await api.put(`/api/admin/Country/${id}/delete`);
//   return response.data;
// };

// export const updateRole = async (id: number, data: UpdateRoleDto) => {
//   const response = await api.put(`/api/admin/Country/${id}/update`, data);
//   return response.data;
// };
