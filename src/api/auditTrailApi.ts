import type { AuditDto} from "../types/controlPanel/audit";
import api from "./axios";

export const getAllAuditTrails = async () => {
  const response = await api.get<AuditDto[]>(`/api/admin/audit-trail`);
  return response.data;
};

