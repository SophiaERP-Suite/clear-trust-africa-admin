export interface OrganisationTypeDto {
  organisationTypeId: number;
  name: string;
  dateCreated: string;
}

export interface CreateOrganisationTypeDto {
  name: string;
}

export interface UpdateOrganisationTypeDto {
  name: string;
}
