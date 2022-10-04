import { useEffect, useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IRegisterFields } from "types/axiosApi";
import { Loader } from "shared/dashboard/Loader";
import { Formik, Form } from "formik";

import useGeocode from "services/Geocode";
import { ReactComponent as Arrow } from "assets/loginRegister/Arrow.svg";
import { FormWrapper, SubmitButton } from "shared/loginRegister";
import { useRegisterData } from "services/UserRegisterData";
import RegistrationSuccessfull from "./Forms/RegistrationSuccessfull";
import validationSchema from "./FormModel/validationSchema";
import submitFormModel from "./FormModel/submitFormModel";
import { OrganizationForm } from "./Forms/OrganizationForm";
import { UserForm } from "./Forms/UserForm";

const steps = [0, 1, 2];
const { formId, formField } = submitFormModel;

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <OrganizationForm formField={formField} />;
    case 1:
      return <UserForm formField={formField} />;
    case 2:
      return <RegistrationSuccessfull />;
    default:
      return <div>Not Found</div>;
  }
};

const initialValues = {
  organizationName: "",
  street: "",
  zipCode: "",
  city: "",
  nip: "",
  krs: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export const RegisterOrganization = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [coordinatesError, setCoordinatesError] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const currentValidationSchema = validationSchema[activeStep];

  const { useData } = useRegisterData();
  const [{ loading, error }, onRegister] = useData();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // setTimeout(setShowErrorMsg(!showErrorMsg) ,1000)

    if (error) {
      const timer = setTimeout(() => setShowErrorMsg(true), 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const handleRegisterFormSubmit = async (values: IRegisterFields) => {
    const address = `${values.street}, ${values.city}, ${values.zipCode}`;
    let lati = null;
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

    const response = await onRegister({
      data: {
        shelter: {
          organizationName: values.organizationName,
          latitude: lati,
          longitude: long,
          nip: values.nip,
          krs: values.krs,
          phoneNumber: values.phoneNumber,
        },
        user: {
          firstName: values.firstName,
          lastName: values.lastName,
          emailAddress: values.emailAddress,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
      },
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 204) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = (data: IRegisterFields, actions: any) => {
    if (activeStep === 1) {
      handleRegisterFormSubmit(data);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <FormWrapper>
      <h2 className="title">Zarejestruj schronisko</h2>
      <p style={{ paddingBottom: "0" }} className="description">
        Wypełnij poniższy formularz i załóż
        <span className="highlighted"> Konto schroniska</span>
      </p>
      <Stepper
        activeStep={activeStep}
        sx={{
          paddingTop: "2.4rem",
          "& .MuiStepConnector-line": {
            borderTopWidth: "2px",
            borderColor: "#DDE2E4",
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "#43be8d",
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: "#43be8d",
          },
        }}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              padding: "0",
              "& .MuiStepLabel-labelContainer": {
                display: "none",
              },
              "& .MuiStepIcon-root": {
                fontSize: "1.2rem",
                color: "#DDE2E4",
              },
              "& .MuiStepIcon-root.Mui-completed.MuiSvgIcon-root.path": {
                display: "none",
              },
              "& .MuiStepIcon-root.Mui-completed": {
                color: "#43be8d",
              },
              "& .MuiStepIcon-root.Mui-active": {
                color: "#43be8d",
                fontSize: "1.6rem",
              },
              text: { display: "none" },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="stepper-description">
        <p>Dane organizacji</p>
        <p>Dane użytkownika</p>
      </div>
      {activeStep === steps.length ? (
        <RegistrationSuccessfull />
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={currentValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValidating }) => (
            <Form id={formId}>
              {renderStepContent(activeStep)}

              <div style={{ position: "relative" }}>
                <Grid2 container spacing={3}>
                  {activeStep === 1 && (
                    <Grid2 xs={12} md={5}>
                      <SubmitButton name="prev" onClick={handleBack}>
                        <Arrow /> Powrót
                      </SubmitButton>
                    </Grid2>
                  )}
                  <Grid2 xs={12} md={activeStep === 0 ? 12 : 7}>
                    {activeStep !== 2 && (
                      <SubmitButton
                        disabled={isValidating}
                        name="next"
                        type="submit"
                      >
                        {activeStep === 1 ? "Zarejestruj się" : "Następny krok"}
                        {activeStep === 0 && <Arrow />}
                      </SubmitButton>
                    )}
                  </Grid2>
                </Grid2>
                {!coordinatesError && showErrorMsg && (
                  <p className="errorMessage" style={{ paddingTop: "0.5rem" }}>
                    {error?.message}
                  </p>
                )}
                {coordinatesError && (
                  <p className="errorMessage">
                    Podane miejsce nie znajduje się w Polsce
                  </p>
                )}
                {loading && <Loader />}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </FormWrapper>
  );
};
