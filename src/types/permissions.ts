export interface CreatePermissionsDto {
  name: string;
  description: string;
  organizationTypeId: number;
}

export interface UpdatePermissionsDto {
   name: string;
  description?: string;
  organizationTypeId?: number;
}

export interface PermissionsDto {
  permissionId: number;
  name: string;
  description: string;
  organizationTypeName: string;
  organizationTypeId?: number;
}
