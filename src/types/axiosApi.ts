export interface ILogin {
  email: string;
  password: string;
}
export interface IResponse {
  accessToken: string;
  refreshToken: string;
  role: string;
  expires: string;
}
export interface IRegister {
  reason: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
