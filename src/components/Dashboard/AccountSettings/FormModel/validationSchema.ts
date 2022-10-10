import * as Yup from "yup";
import submitFormModel from "components/Register/FormModel/submitFormModel";

const {
  formField: {
    firstName,
    lastName,
    emailAddress,
    password,
    confirmPassword,
    organizationName,
    street,
    zipCode,
    city,
    nip,
    krs,
    phoneNumber,
  },
} = submitFormModel;

export default [
  Yup.object().shape({
    [organizationName.name]: Yup.string()
      .min(2, "Minimum 2 znaki")
      .matches(
        /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-]{2,64}$/,
        "Znaki specjalne z wyjątkiem - są niedozwolone"
      ),
    [street.name]: Yup.string()
      .min(2, "Minimum 2 znaki")
      .matches(
        /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-]{2,64}$/,
        "Znaki specjalne z wyjątkiem - są niedozwolone"
      ),
    [zipCode.name]: Yup.string().matches(
      /^\d\d-\d\d\d$/,
      "Wymagany format '00-000'"
    ),
    [city.name]: Yup.string()
      .min(2, "Minimum 2 znaki")
      .matches(
        /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-]{2,64}$/,
        "Znaki specjalne z wyjątkiem - są niedozwolone"
      ),
    [nip.name]: Yup.string()
      .matches(/^\d{10}$/, "Numer NIP musi mieć 10 cyfr")
      .length(10, "Numer NIP musi mieć 10 cyfr"),
    [krs.name]: Yup.string()
      .matches(/^\d{10}$/, "Numer KRS musi mieć 10 cyfr")
      .length(10, "Numer KRS musi mieć 10 cyfr"),
    [phoneNumber.name]: Yup.string().matches(
      /^\d{9,10}$/,
      "Numer telefonu musi mieć między 9-10 cyfr"
    ),
  }),
  Yup.object().shape({
    [firstName.name]: Yup.string()
      .min(2, "Minimum 2 znaki")
      .matches(
        /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ\\-]{2,32}$/,
        "Dozwolone są tylko litery oraz '-'"
      ),
    [lastName.name]: Yup.string()
      .min(2, "Minimum 2 znaki")
      .matches(
        /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ\\-]{2,32}$/,
        "Dozwolone są tylko litery oraz '-'"
      ),
    [emailAddress.name]: Yup.string().email("Niepoprawny email"),
    [password.name]: Yup.string()
      .min(8, "Hasło musi zawierać conajmniej 8 znaków")
      .matches(/^(?=.*?[a-z])/, "Wymagana: mała litera")
      .matches(/^(?=.*?[A-Z])/, "Wymagana: duża litera")
      .matches(/^(?=.*?[#?!@$%^&*-])/, "Wymagany: znak specjalny #?!@$%^&*-")
      .matches(/^(?=.*?[0-9])/, "Wymagana: cyfra 0-9"),
    [confirmPassword.name]: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Hasła muszą być takie same"
    ),
  }),
];
