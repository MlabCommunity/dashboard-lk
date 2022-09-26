import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message/dist";
import Select from "react-select";

import { SectionLayout } from "shared/dashboard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
// import { ErrorMessage, Formik } from "formik";

// import { Select } from "shared/dashboard/Select";
import Plus from "assets/dashboard/Plus.png";

import { Input } from "shared/loginRegister/InputField";
// import { SelectField } from "shared/dashboard/Select";

import {
  SubmitButton,
  Inputs,
  // InputField,
  ReturnLink,
} from "shared/loginRegister";
import { customStyles } from "./CustomSelectStyles";
// import {
//   useDogCardData,
//   useCatCardData,
//   useOtherCardData,
// } from "services/AnimalCardData";
// import { IAnimalCardTypes } from "types/axiosApi";
import { FormContainer, FormWrapper, FileInputWrapper } from "./FormComponents";
// import SubmitForm from "./FormModel/SubmitFormModel";
// import Validation from "./FormModel/Validation";
import { data } from "./FormModel/FormInputsData";
// const { formId, FormField } = SubmitForm;

import submitForm from "./FormModel/SubmitFormModel";

const {
  type,
  dogColor,
  dogBreed,
  // catColor,
  // catBreed,
  name,
  gender,
  dateOfBirth,
  photos,
  weight,
  isSterilized,
} = submitForm;

const required = "Wymagane Pole";

const Schema = Yup.object().shape({
  [type.name]: Yup.string()
    .min(2, "Minimum 2 znaki")
    .matches(
      /^[a-zA-ZzżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\\-]{2,64}$/,
      "Znaki specjalne z wyjątkiem - są niedozwolone"
    )
    .required(required),
  [dogColor.name]: Yup.string().required(required),
  [dogBreed.name]: Yup.string().required(required),
  // [catColor.name]: Yup.string().required(required),
  // [catBreed.name]: Yup.string().required(required),
  [name.name]: Yup.string().required(required),
  [gender.name]: Yup.string().required(required),
  [isSterilized.name]: Yup.string().required(required),
  [photos.name]: Yup.array()
    .min(1, "Wybierz przynajmniej 1 zdjęcie")
    .nullable()
    .required(required),
  [weight.name]: Yup.string().required(required),
  [dateOfBirth.name]: Yup.string().required(required),
});

export const NewAnimalCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(Schema),
    mode: "onChange",
    reValidateMode: "onBlur",
  });
  const onSubmit = (formData: any) => {
    console.log(formData.photos[0]);
    console.log(formData);
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(formData));
  };
  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <SectionLayout>
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit, onError)}>
          <Inputs style={{ padding: "0 2.4rem 2.4rem" }}>
            <Grid2 container spacing={3}>
              <Grid2 xs={12}>
                <label htmlFor="name">Imię zwierzaka</label>
                <Input type="text" placeholder="Wpisz" {...register("name")} />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  render={({ message }: any) => (
                    <p className="errorMessage">{message}</p>
                  )}
                />
              </Grid2>
            </Grid2>
            {data.map((dat) => (
              <React.Fragment key={dat.label}>
                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor={dat.name}>{dat.label}</label>
                    <Controller
                      name={dat.name}
                      control={control}
                      render={({ field, field: { value, ref } }) => (
                        <Select
                          options={dat.options}
                          placeholder="Wybierz z listy"
                          {...register(dat.name)}
                          ref={ref}
                          styles={customStyles}
                          value={dat.options.find((c) => c.value === value)}
                          onChange={(val) => field.onChange(val!.value)}
                        />
                      )}
                    />
                    <ErrorMessage
                      errors={errors}
                      name={dat.name}
                      render={({ message }: any) => (
                        <p className="errorMessage">{message}</p>
                      )}
                    />
                  </Grid2>
                </Grid2>
              </React.Fragment>
            ))}

            <Grid2 container spacing={3}>
              <Grid2 xs={12}>
                <p className="photos-title">Dodaj zdjęcia</p>
                <FileInputWrapper tabIndex={0}>
                  <label htmlFor="photos">
                    Dodaj
                    <Input
                      type="file"
                      id="photos"
                      style={{ display: "none" }}
                      {...register("photos")}
                    />
                    <div>
                      <img src={Plus} alt="" />
                    </div>
                  </label>
                </FileInputWrapper>
                <ErrorMessage
                  errors={errors}
                  name="photos"
                  render={({ message }) => (
                    <p className="errorMessage">{message}</p>
                  )}
                />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={3}>
              <Grid2 xs={12}>
                <label htmlFor="weight">Waga</label>
                <Input
                  type="text"
                  placeholder="Kilogramy"
                  {...register("weight")}
                />
              </Grid2>
            </Grid2>
            <ErrorMessage
              errors={errors}
              name="weight"
              render={({ message }) => (
                <p className="errorMessage">{message}</p>
              )}
            />
          </Inputs>

          <div className="controls">
            <ReturnLink>
              <Link to="/animalCardsSection">Anuluj</Link>
            </ReturnLink>
            <SubmitButton type="submit" name="next" style={{ width: "unset" }}>
              Zapisz
            </SubmitButton>
          </div>
        </FormContainer>
      </FormWrapper>
    </SectionLayout>
  );
};

// const [selectedAnimalType, setSelectedAnimalType] = useState("");
// console.log(selectedAnimalType);

// const { dogCardData } = useDogCardData();
// // const { catCardData } = useCatCardData();
// // const { otherCardData } = useOtherCardData();

// const [{ error, loading }, addDog] = dogCardData();
// const handleFormSubmit = async (values: IAnimalCardTypes) => {
//   if (selectedAnimalType === "Pies") {
//     console.log(error, loading);
//     const response = await addDog({
//       data: {
//         name: values.name,
//         dogBreed: values.dogBreed,
//         dogColor: values.dogColor,
//         weight: values.weight,
//         photos: values.photos,
//         isSterilized: values.isSterilized,
//         gender: values.gender,
//         dateOfBirth: values.dateOfBirth,
//       },
//     });
//     console.log(response);
// } else if (selectedAnimalType === "Kot") {
//   const [{ error, loading }, addCat] = catCardData();
//   console.log(error, loading);

//   const response = await addCat({
//     data: {
//       name: values.name,
//       dogBreed: values.dogBreed,
//       dogColor: values.dogColor,
//       weight: values.weight,
//       photos: values.photos,
//       isSterilized: values.isSterilized,
//       gender: values.gender,
//       dateOfBirth: values.dateOfBirth,
//     },
//   });
//   console.log(response);
// } else {
//   const [{ error, loading }, addOther] = otherCardData();
//   console.log(error, loading);

//   const response = await addOther({
//     data: {
//       name: values.name,
//       weight: values.weight,
//       photos: values.photos,
//       isSterilized: values.isSterilized,
//       gender: values.gender,
//       dateOfBirth: values.dateOfBirth,
//     },
//   });
//   console.log(response);
//   }
// };

// const handleSubmit = (inputsData: IAnimalCardTypes, actions: any) => {
//   console.log("inputsData");
//   handleFormSubmit(inputsData);

//   actions.setTouched({});
//   actions.setSubmitting(false);
// };

// const saveSelectedBreed = (selectedBreed: string) => {
//   setSelectedAnimalType(selectedBreed);
// };
