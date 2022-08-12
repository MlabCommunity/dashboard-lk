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
export interface IInputNames {
  name: string;
  label: string;
}
export interface IInputTypes {
  formField: {
    [key: string]: IInputNames;
  };
}
export interface IRegisterFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  organizationName: string;
  streetName: string;
  zipcode: string;
  city: string;
  numberNIP: string;
  numberKRS: string;
}
