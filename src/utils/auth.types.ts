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
