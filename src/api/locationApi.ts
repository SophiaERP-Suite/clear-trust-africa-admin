import type {
  CityDto,
  CountryDto,
  CreateCityDto,
  CreateStateDto,
  StateDto,
  UpdateCityDto,
  UpdateStateDto,
} from "../types/controlPanel/location";
import api from "./axios";

// =========== Country Management =============
export const getAllCountries = async () => {
  const response = await api.get<CountryDto[]>(`/api/admin/Country/GetAll`);
  return response.data;
};

// ============ State Management ===============
export const createState = async (data: CreateStateDto) => {
  const response = await api.post("/api/admin/State/register", data);
  return response.data;
};

export const getAllStates = async (countryId: number) => {
  const response = await api.get<StateDto[]>(
    `/api/admin/State/${countryId}/GetAll`
  );
  return response.data;
};

export const deleteState = async (id: number) => {
  const response = await api.put(`/api/admin/State/${id}/delete`);
  return response.data;
};

export const updateState = async (id: number, data: UpdateStateDto) => {
  const response = await api.put(`/api/admin/State/${id}/update`, data);
  return response.data;
};

// ============ City Management ===============
export const createCity = async (data: CreateCityDto) => {
  const response = await api.post("/api/admin/City/register", data);
  return response.data;
};

export const getAllCities = async (stateId: number) => {
  const response = await api.get<CityDto[]>(
    `/api/admin/City/${stateId}/GetAll`
  );
  return response.data;
};

export const deleteCity = async (id: number) => {
  const response = await api.put(`/api/admin/City/${id}/delete`);
  return response.data;
};

export const updateCity = async (id: number, data: UpdateCityDto) => {
  const response = await api.put(`/api/admin/City/${id}/update`, data);
  return response.data;
};
