// export interface CreateRolesDto {
//   name: string;
// }

// export interface UpdateRoleDto {
//   name: string;
// }

export interface IncidentReportDto {
  incidentReportId: number;
  incidentTitle: string;
  incidentTypeId: number;
  incidentDate: string;
  description: string;
  incidentLocation: string;
  reportedById: number;
  accusedEmployeeId: number;
  recordedById: number;
  recorderName: string;
  severityLevel: number;
  incidentStatus: number;
  dateCreated: string;
}
