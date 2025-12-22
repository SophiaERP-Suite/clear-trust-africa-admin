// src/types/user.ts
export interface Role {
  roleId: number;
  name: string;
}

export interface User {
  userId: number;
  email: string;
  roleId: number;
  roleName: string;
  isActive: boolean;
  createdAt: string;
}

export interface CreateUserDto {
  email: string;
  roleId: number;
  isActive: boolean;
}