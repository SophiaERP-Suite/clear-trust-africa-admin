export interface OrganizationTypeDto {
  organizationTypeId: number;
  name: string;
  dateCreated: string;
}

export interface CreateOrganizationTypeDto {
  name: string;
}

export interface UpdateOrganizationTypeDto {
  name: string;
}
