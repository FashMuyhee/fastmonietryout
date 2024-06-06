export interface LoginFormPayload {
  email: string;
  password: string;
}

export interface RegisterFormPayload {
  email: string;
  password: string;
  lastName: string;
  firstName: string;
}

export interface LoginResponse {
  token: string;
}

export interface ErrorResponse {
  error: string;
}
