export interface ILogin {
  email: string;
  password: string;
}
export interface IResponse {
  accessToken: string;
  refreshToken: string;
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
  emailAddress: string;
  password: string;
  confirmPassword: string;
  organizationName: string;
  street: string;
  zipCode: string;
  city: string;
  nip: string;
  krs: string;
  phoneNumber: string;
}
export interface IRegisterShelter {
  shelter: {
    organizationName: string;
    longitude: number;
    latitude: number;
    nip: string;
    krs: string;
    phoneNumber: string;
  };

  user: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    confirmPassword: string;
  };
}
export interface IAnimalCardTypes {
  name: string;
  dogBreed: string;
  dogColor: string;
  catBreed: string;
  catColor: string;
  gender: string;
  weight: string;
  isSterilized: string;
  photos: string[];
  dateOfBirth: string;
  options: [];
  value: string;
  label: string;
}

export interface IGetCoordinates {
  street: string;
  zipCode: string;
  city: string;
}

export interface IEmail {
  email: string;
}
export interface IResetPassword {
  password: string;
  confirmPassword: string;
  email: string;
}

export interface IUpdateOrganizationData {
  organizationName: string;
  street: string;
  zipCode: string;
  city: string;
  nip: string;
  krs: string;
  phoneNumber: string;
}
export interface IUpdateUserData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
}

export interface IUpdatePassword {
  password: string;
  confirmPassword: string;
}
