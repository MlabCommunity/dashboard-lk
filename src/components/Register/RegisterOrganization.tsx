import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IRegisterFields } from "types/axiosApi";
import { PuffLoader } from "react-spinners";
import { Formik, Form } from "formik";

import { ReactComponent as Arrow } from "assets/loginRegister/Arrow.svg";
import { FormWrapper, override, SubmitButton } from "shared/loginRegister";
import useRegisterData from "services/UserRegisterData";
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
  streetName: "",
  zipcode: "",
  city: "",
  numberNIP: "",
  numberKRS: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterOrganization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentValidationSchema = validationSchema[activeStep];

  const { useData } = useRegisterData();
  const [{ loading, error }, onRegister] = useData();

  const handleRegisterFormSubmit = async (values: IRegisterFields) => {
    const response = await onRegister({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 201) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = (values: IRegisterFields, actions: any) => {
    if (activeStep === 1) {
      handleRegisterFormSubmit(values);
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
          {({ isSubmitting }) => (
            <Form id={formId}>
              {renderStepContent(activeStep)}

              <div>
                <Grid2 container spacing={3}>
                  {activeStep === 1 && (
                    <Grid2 xs={12} md={5}>
                      <SubmitButton name="prev" onClick={handleBack}>
                        <Arrow /> Powrót
                      </SubmitButton>
                    </Grid2>
                  )}
                  <Grid2 xs={12} md={activeStep === 0 ? 12 : 7}>
                    <SubmitButton
                      disabled={isSubmitting}
                      name="next"
                      type="submit"
                    >
                      {activeStep === 1 ? "Zarejestruj się" : "Następny krok"}
                      {activeStep === 0 && <Arrow />}
                    </SubmitButton>
                  </Grid2>
                </Grid2>

                <p className="errorMessage">{error && "Coś poszło nie tak"}</p>
                {loading && (
                  <PuffLoader
                    color="green"
                    cssOverride={override}
                    speedMultiplier={1.5}
                  />
                )}
              </div>
            </Form>
          )}
        </Formik>
      )}
    </FormWrapper>
  );
};
