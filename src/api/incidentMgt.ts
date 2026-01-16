import type { IncidentReportDto } from "../types/controlPanel/IncidentReport";
import api from "./axios";

const BaseURL = "http://localhost:5181";

export const fetchIncidentReports = async (page: number, pageSize: number) => {
  const response = await api.get<IncidentReportDto[]>(
    `/api/employer/IncidentReports/${page}/${pageSize}/GetAllByAdmin`
  );
  console.log("fetching", response.data);
  return response.data;
};

export const UpdateStatus = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(
    `${BaseURL}  http://localhost:5181/api/employer/IncidentReports/${originalId}/updateStatus`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }
  console.log(response);
  return response.json();
};

export const fetchIncidentAttachments = async (incidentReportId: number) => {
  const token = localStorage.getItem("accessToken");

  const response = await fetch(
    `${BaseURL}/api/employer/IncidentAttachments/${incidentReportId}/attachments`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }
  console.log(response);
  return response.json();
};

export const createIncidentEscalation = async (
  data: FormData,
  organisationId: number,
  incidentReportId: number
) => {
  const token = localStorage.getItem("accessToken");
  const response = await fetch(
    `${BaseURL}/IncidentEscalation/${organisationId}/${incidentReportId}/register`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    }
  );
  return response;
};
