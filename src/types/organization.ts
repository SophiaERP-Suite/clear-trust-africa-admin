export interface VerificationDocumentDto {
  documentType: string;
  filePath: string;
}

export interface CreateOrganizationDto {
  organizationTypeId: number;
  name: string;
  registrationNumber: string;
  address: string;
  verificationDocuments: VerificationDocumentDto[];
}

export interface OrganizationDto {
  organizationId: number;
  organizationTypeId: number;
  organizationTypeName: string;
  name: string;
  statusDisplay: string;
  status: number;
  registrationNumber: string;
  address: string;
  dateCreated: string;
  applicationsCount: number;
  usersCount: number;
}
