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
