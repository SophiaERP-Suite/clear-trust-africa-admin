export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userRole: string;
  organisationId: number;
  organisationName: string;
  organisationType: string;
  roleScope: string;
  tin: string;
  registrationNumber: string;
  organisationAddress: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

export interface AuthData {
  token: string;
  user: User;
}

export interface AuthContextType {
  user: User | null;
  login: (data: AuthData) => void;
  loadUser: (data: User) => void;
  logout: () => void;
}
