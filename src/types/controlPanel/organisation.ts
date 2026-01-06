export interface VerificationDocumentDto {
  documentType: string;
  filePath: string;
}

export interface CreateOrganisationDto {
  organisationTypeId: number;
  name: string;
  registrationNumber: string;
  address: string;
  verificationDocuments: VerificationDocumentDto[];
}

export interface OrganisationDto {
  organisationId: number;
  organisationTypeId: number;
  organisationTypeName: string;
  name: string;
  statusDisplay: string;
  status: number;
  registrationNumber: string;
  address: string;
  dateCreated: string;
  applicationsCount: number;
  usersCount: number;
}
