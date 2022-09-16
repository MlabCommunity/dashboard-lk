import * as Yup from "yup";

import submitForm from "./SubmitFormModel";

const {
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

export default {
  [dogColor.name]: Yup.string().required(required),
  [dogBreed.name]: Yup.string().required(required),
  [catColor.name]: Yup.string().required(required),
  [catBreed.name]: Yup.string().required(required),
  [name.name]: Yup.string().required(required),
  [gender.name]: Yup.string().required(required),
  [isSterilized.name]: Yup.string().required(required),
  [photos.name]: Yup.string().required(required),
  [weight.name]: Yup.string().required(required),
  [dateOfBirth.name]: Yup.string().required(required),
};
