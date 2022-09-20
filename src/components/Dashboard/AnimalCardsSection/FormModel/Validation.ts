import * as Yup from "yup";

import submitForm from "./SubmitFormModel";

const {
  type,
  dogColor,
  dogBreed,
  catColor,
  catBreed,
  name,
  gender,
  dateOfBirth,
  photos,
  weight,
  isSterilized,
} = submitForm;

const required = "Wymagane Pole";

export default [
  Yup.object().shape({
    [type.name]: Yup.string().required(required),
    [dogColor.name]: Yup.string().required(required),
    [dogBreed.name]: Yup.string().required(required),
    [catColor.name]: Yup.string().required(required),
    [catBreed.name]: Yup.string().required(required),
    [name.name]: Yup.string().required(required),
    [gender.name]: Yup.string().required(required),
    [isSterilized.name]: Yup.string().required(required),
    [photos.name]: Yup.array()
      .min(1, "Wybierz przynajmniej 1 zdjęcie")
      .nullable()
      .required(required),
    [weight.name]: Yup.string().required(required),
    [dateOfBirth.name]: Yup.string().required(required),
  }),
];
