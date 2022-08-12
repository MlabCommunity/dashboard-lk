import submitFormModel from "./submitFormModel";

const {
  formField: {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    organizationName,
    streetName,
    zipcode,
    city,
    numberNIP,
    numberKRS,
  },
} = submitFormModel;

export default {
  [organizationName.name]: "",
  [streetName.name]: "",
  [zipcode.name]: "",
  [city.name]: "",
  [numberNIP.name]: "",
  [numberKRS.name]: "",
  [firstName.name]: "",
  [lastName.name]: "",
  [email.name]: "",
  [password.name]: "",
  [confirmPassword.name]: "",
};
