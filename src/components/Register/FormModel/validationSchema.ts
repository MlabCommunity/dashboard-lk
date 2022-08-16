import * as Yup from "yup";
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

const required = "Wymagane Pole";

export default [
  Yup.object().shape({
    [organizationName.name]: Yup.string().required(required),
    [streetName.name]: Yup.string().required(required),
    [zipcode.name]: Yup.string().required(required),
    [city.name]: Yup.string().required(required),
    [numberNIP.name]: Yup.string()
      .required(required)
      .length(10, "Numer NIP musi mieć 10 cyfr"),
    [numberKRS.name]: Yup.string()
      .required(required)
      .length(10, "Numer KRS musi mieć 10 cyfr"),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string().required(required),
    [lastName.name]: Yup.string().required(required),
    [email.name]: Yup.string().email("Niepoprawny email").required(required),
    [password.name]: Yup.string()
      .min(6, "Hasło musi zawierać conajmniej 6 znaków")
      .matches(/^(?=.*?[a-z])/, "Wymagana: mała litera")
      .matches(/^(?=.*?[A-Z])/, "Wymagana: duża litera")
      .matches(/^(?=.*?[#?!@$%^&*-])/, "Wymagany: znak specjalny #?!@$%^&*-")
      .matches(/^(?=.*?[0-9])/, "Wymagana: cyfra 0-9")
      .required(required),
    [confirmPassword.name]: Yup.string()
      .required(required)
      .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
  }),
];
