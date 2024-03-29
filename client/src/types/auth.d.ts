export interface signInPayload {
  email: string;
  password: string;
}

export interface signUpPayload {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}
