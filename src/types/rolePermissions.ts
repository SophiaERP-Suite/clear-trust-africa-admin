export interface CreateRolePermissionsDto {
  RoleId: number;
  PermissionId: number;
}

export interface UpdateRolePermissionsDto {
  RoleId: number;
  PermissionId: number;
}

export interface RolePermissionsDto {
  rolePermissionId: number;
  roleName: string;
  permissionName: string;
  roleId: number;
  permissionId: number;
}
