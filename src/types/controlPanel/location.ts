// ================== Country ===================
export interface CountryDto {
  countryId: number;
  name: string;
  code: string;
}

// =================== State =================
export interface CreateStateDto {
  name: string;
  code: string;
  countryId: number;
}

export interface UpdateStateDto {
  name: string;
  code: string;
}

export interface StateDto {
  stateId: number;
  name: string;
  code: string;
  countryId: number;
  countryName: string;
}

// =================== City =================
export interface CreateCityDto {
  name: string;
  code: string;
  stateId: number;
}

export interface UpdateCityDto {
  name: string;
  code: string;
}

export interface CityDto {
  cityId: number;
  name: string;
  code: string;
  stateId: number;
  stateName: string;
}
