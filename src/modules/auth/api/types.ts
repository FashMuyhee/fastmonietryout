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
  id?: string;
}

export interface RegisterResponse extends Omit<RegisterFormPayload, 'password'> {
  id: string;
  token: string;
}

export interface ErrorResponse {
  error: string;
}
