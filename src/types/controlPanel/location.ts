// export interface UpdateRoleDto {
//   name: string;
// }

// ================== Country ===================
export interface CountryDto {
  CountryId: number;
  name: string;
  code: string;
}

// =================== State =================
export interface CreateStateDto {
  name: string;
  code: string;
  countryId: number;
}

export interface StateDto {
  name: string;
  code: string;
  countryName: string;
}
