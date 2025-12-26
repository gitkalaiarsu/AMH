export type SignInInput = {
  email: string;
  password: string;
};

export interface SignInResponse {
  signIn?: {
    success: boolean;
    message: string;
    accessToken: string;
    refreshToken: string;
    token: string;
  };
  message: string;
  success: boolean;
}
