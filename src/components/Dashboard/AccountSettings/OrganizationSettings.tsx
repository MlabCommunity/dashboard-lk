import styled from "styled-components";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IUpdateOrganizationData } from "types/axiosApi";
import { Loader } from "shared/dashboard/Loader";
import { Formik, Form, ErrorMessage } from "formik";

import {
  FormWrapper,
  InputField,
  Inputs,
  SubmitButton,
} from "shared/loginRegister";
import { useUpdateOrganization } from "services/UpdateShelters";
import useGeocode from "services/Geocode";
import ValidationSchema from "components/Register/FormModel/validationSchema";
import { formFieldOrganization } from "./FormModel/submitFormModel";

const UpdateButton = styled(SubmitButton)`
  margin-top: 0;
  margin-left: auto;
  width: auto;
  ${({ theme }) => theme.buttonLarge}
`;

const initialValues = {
  organizationName: "",
  street: "",
  zipCode: "",
  city: "",
  nip: "",
  krs: "",
  phoneNumber: "",
};

export const OrganizationSettings = () => {
  const { useOrganizationData } = useUpdateOrganization();
  const [{ loading, error }, onOrganizationUpdate] = useOrganizationData();

  const [coordinatesError, setCoordinatesError] = useState(false);

  const handleEditOrganizationSubmit = async (
    values: IUpdateOrganizationData
  ) => {
    const address = `${values.street}, ${values.city}, ${values.zipCode}`;
    // eslint-disable-next-line no-unused-vars
    let lati = null;
    // eslint-disable-next-line no-unused-vars
    let long = null;

    const getCoordinates = (lat: number, lng: number) => {
      lati = lat;
      long = lng;
    };

    await useGeocode()
      .fromAddress(address)
      .then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          getCoordinates(lat, lng);
          if (lat < 49 || lat > 59.34 || lng < 14.07 || lng > 24.15) {
            setCoordinatesError(true);
          }
        },
        (err) => {
          console.log(err);
        }
      );

    const response = await onOrganizationUpdate({
      data: {
        organizationName: values.organizationName,
        street: values.street,
        zipCode: values.zipCode,
        city: values.city,
        nip: values.nip,
        krs: values.krs,
        phoneNumber: values.phoneNumber,
      },
    });
    console.log(response);
  };
  const handleSubmit = (data: IUpdateOrganizationData, actions: any) => {
    handleEditOrganizationSubmit(data);
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  return (
    <FormWrapper>
      <h2
        style={{
          fontWeight: "600",
          fontSize: "1.8rem",
          lineHeight: "2.4rem",
          letterSpacing: "-0.014em",
          color: "#000",
          textAlign: "left",
          paddingBottom: "1.6rem",
        }}
      >
        Ustawienia organizacji
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema[0]}
        onSubmit={handleSubmit}
      >
        {({ isValidating }) => (
          <Form>
            <Inputs>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="organizationName">
                    {formFieldOrganization.organizationName.label}
                  </label>
                  <InputField
                    maxLength="64"
                    type="text"
                    name={formFieldOrganization.organizationName.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="organizationName"
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="street">
                    {formFieldOrganization.street.label}
                  </label>
                  <InputField
                    maxLength="64"
                    type="text"
                    name={formFieldOrganization.street.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="street"
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={5}>
                  <label htmlFor="zipCode">
                    {formFieldOrganization.zipCode.label}
                  </label>
                  <InputField
                    maxLength="6"
                    type="text"
                    name={formFieldOrganization.zipCode.name}
                    placeholder="00-000"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="zipCode"
                  />
                </Grid2>
                <Grid2 xs={7}>
                  <label htmlFor="city">
                    {formFieldOrganization.city.label}
                  </label>
                  <InputField
                    maxLength="64"
                    type="text"
                    name={formFieldOrganization.city.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="city"
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="nip">{formFieldOrganization.nip.label}</label>
                  <InputField
                    type="text"
                    name={formFieldOrganization.nip.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="nip"
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="krs">{formFieldOrganization.krs.label}</label>
                  <InputField
                    type="text"
                    name={formFieldOrganization.krs.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name="krs"
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="phoneNumber">
                    {formFieldOrganization.phoneNumber.label}
                  </label>
                  <InputField
                    type="text"
                    name={formFieldOrganization.phoneNumber.name}
                    placeholder="Wpisz"
                  />
                </Grid2>
              </Grid2>
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="phoneNumber"
              />
            </Inputs>

            {!coordinatesError && error && (
              <p className="errorMessage">Coś poszło nie tak</p>
            )}
            {coordinatesError && (
              <p className="errorMessage">
                Podane miejsce nie znajduje się w Polsce
              </p>
            )}
            <Grid2 container spacing={3}>
              <Grid2 xs={3}>
                <UpdateButton disabled={isValidating} name="next" type="submit">
                  Zapisz
                </UpdateButton>
              </Grid2>
            </Grid2>
            {loading && <Loader />}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
