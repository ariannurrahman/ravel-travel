export interface LoginPayload {
  userId: string;
  password: string;
  remember?: boolean;
}

export interface RegisterPayload {
  userId: string;
  name: string;
  password: string;
  confirmPassword: string;
}
