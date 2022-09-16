import { useState } from "react";
import { SectionLayout } from "shared/dashboard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";

import { Select } from "shared/dashboard/Select";
import Plus from "assets/dashboard/Plus.png";

import {
  SubmitButton,
  Inputs,
  InputField,
  ReturnLink,
} from "shared/loginRegister";
import {
  useDogCardData,
  useCatCardData,
  useOtherCardData,
} from "services/AnimalCardData";
import { IAnimalCardTypes } from "types/axiosApi";
import { FormContainer, FormWrapper, FileInputWrapper } from "./FormComponents";
// import SubmitForm from "./FormModel/SubmitFormModel";
import Validation from "./FormModel/Validation";
import { data } from "./FormModel/FormInputsData";

// const { formId, FormField } = SubmitForm;

export const NewAnimalCard = () => {
  const [selectedAnimalType, setSelectedAnimalType] = useState("");
  console.log(selectedAnimalType);

  const { dogCardData } = useDogCardData();
  const { catCardData } = useCatCardData();
  const { otherCardData } = useOtherCardData();

  const handleFormSubmit = async (values: IAnimalCardTypes) => {
    if (selectedAnimalType === "Pies") {
      const [{ error, loading }, addDog] = dogCardData();
      console.log(error, loading);
      const response = await addDog({
        data: {
          name: values.name,
          dogBreed: values.dogBreed,
          dogColor: values.dogColor,
          weight: values.weight,
          photos: values.photos,
          isSterilized: values.isSterilized,
          gender: values.gender,
          dateOfBirth: values.dateOfBirth,
        },
      });
      console.log(response);
    } else if (selectedAnimalType === "Kot") {
      const [{ error, loading }, addCat] = catCardData();
      console.log(error, loading);

      const response = await addCat({
        data: {
          name: values.name,
          dogBreed: values.dogBreed,
          dogColor: values.dogColor,
          weight: values.weight,
          photos: values.photos,
          isSterilized: values.isSterilized,
          gender: values.gender,
          dateOfBirth: values.dateOfBirth,
        },
      });
      console.log(response);
    } else {
      const [{ error, loading }, addOther] = otherCardData();
      console.log(error, loading);

      const response = await addOther({
        data: {
          name: values.name,
          weight: values.weight,
          photos: values.photos,
          isSterilized: values.isSterilized,
          gender: values.gender,
          dateOfBirth: values.dateOfBirth,
        },
      });
      console.log(response);
    }
  };

  const handleSubmit = (inputsData: IAnimalCardTypes, actions: any) => {
    handleFormSubmit(inputsData);

    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const saveSelectedBreed = (selectedBreed: string) => {
    setSelectedAnimalType(selectedBreed);
  };

  return (
    <SectionLayout>
      <FormWrapper>
        <Formik
          initialValues={{
            dogColor: "",
            dogBreed: "",
            catColor: "",
            catBreed: "",
            name: "",
            gender: "",
            dateOfBirth: "",
            photos: [],
            weight: "",
            isSterilized: "",
          }}
          validationSchema={Validation}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <FormContainer onSubmit={props.handleSubmit}>
              <Inputs style={{ padding: "0 2.4rem 2.4rem" }}>
                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="name">Imię zwierzaka</label>
                    <InputField type="text" name="name" placeholder="Wpisz" />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="name"
                />

                {data.map((dat) => (
                  <>
                    <Grid2 container spacing={3} key={dat.label}>
                      <Grid2 xs={12}>
                        <label htmlFor={dat.name}>{dat.label}</label>
                        <Select
                          selectId={dat.name}
                          options={dat.options}
                          getSelectedValue={saveSelectedBreed}
                          key={dat.label}
                        />
                      </Grid2>
                    </Grid2>
                    <ErrorMessage
                      component="p"
                      className="errorMessage"
                      name={dat.name}
                    />
                  </>
                ))}

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <p className="photos-title">Dodaj zdjęcia</p>
                    <FileInputWrapper tabIndex={0}>
                      <label htmlFor="photos">
                        Dodaj
                        <InputField
                          type="file"
                          id="photos"
                          name="photos"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                        <div>
                          <img src={Plus} alt="" />
                        </div>
                      </label>
                    </FileInputWrapper>
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="name"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="weight">Waga</label>
                    <InputField
                      type="text"
                      name="weight"
                      placeholder="Kilogramy"
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="weight"
                />
              </Inputs>
              {/* {error && <p className="errorMessage">Coś poszło nie tak</p>} */}
              <div className="controls">
                <ReturnLink>
                  <Link to="/animalCardsSection">Anuluj</Link>
                </ReturnLink>
                <SubmitButton
                  type="submit"
                  name="next"
                  disabled={props.isSubmitting}
                  style={{ width: "unset" }}
                >
                  Zapisz
                </SubmitButton>
              </div>
            </FormContainer>
          )}
        </Formik>
      </FormWrapper>
    </SectionLayout>
  );
};
