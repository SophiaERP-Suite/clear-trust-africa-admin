
import type { ToggleNotificationSettingDto } from "../types/notification";
import api from "./axios";

export const getAllNotificationSettings = async () => {
  const response = await api.get(`/api/admin/Notification/GetAll`);
  return response.data;
};

export const toggleNotificationSetting = async (eventId: number, data: ToggleNotificationSettingDto) => {
  const response = await api.patch(`/api/admin/Notification/${eventId}/toggle`, data);
  return response.data;
};