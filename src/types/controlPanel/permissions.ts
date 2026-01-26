export interface CreatePermissionsDto {
  name: string;
  description: string;
  organisationTypeId: number;
}

export interface UpdatePermissionsDto {
  name: string;
  description?: string;
  organisationTypeId?: number;
}

export interface PermissionsDto {
  permissionId: number;
  name: string;
  description: string;
  organisationTypeName: string;
  organisationTypeId?: number;
}
