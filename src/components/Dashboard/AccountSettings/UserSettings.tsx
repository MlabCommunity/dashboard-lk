import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IUpdateUserData } from "types/axiosApi";
import { Loader } from "shared/dashboard/Loader";
import { Formik, Form, ErrorMessage } from "formik";

import {
  FormWrapper,
  InputField,
  Inputs,
  SubmitButton,
} from "shared/loginRegister";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import { useUpdateUser } from "services/UpdateShelters";
import ValidationSchema from "components/Register/FormModel/validationSchema";
import EyeOff from "assets/loginRegister/Eye-off.png";
import EyeOn from "assets/loginRegister/Eye-on.png";
import { formFieldUser } from "./FormModel/submitFormModel";

const UpdateButton = styled(SubmitButton)`
  ${({ theme }) => theme.buttonLarge}
`;

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
};

export const UserSettings = () => {
  const { useUserData } = useUpdateUser();
  const [{ loading, error }, onUserUpdate] = useUserData();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const handleEditOrganizationSubmit = async (values: IUpdateUserData) => {
    const response = await onUserUpdate({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.emailAddress,
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    });
    console.log(response);
  };
  const handleSubmit = (data: IUpdateUserData, actions: any) => {
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
        Ustawienia użytkownika
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema[1]}
        onSubmit={handleSubmit}
      >
        {({ isValidating }) => (
          <Form>
            <Inputs>
              <Grid2 container spacing={2}>
                <Grid2 xs={6}>
                  <label htmlFor={formFieldUser.firstName.name}>
                    {formFieldUser.firstName.label}
                  </label>
                  <InputField
                    maxLength="32"
                    type="text"
                    name={formFieldUser.firstName.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.firstName.name}
                  />
                </Grid2>
                <Grid2 xs={6}>
                  <label htmlFor={formFieldUser.lastName.name}>
                    {formFieldUser.lastName.label}
                  </label>
                  <InputField
                    maxLength="32"
                    type="text"
                    name={formFieldUser.lastName.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.lastName.name}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor={formFieldUser.emailAddress.name}>
                    {formFieldUser.emailAddress.label}
                  </label>
                  <InputField
                    type="email"
                    name={formFieldUser.emailAddress.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.emailAddress.name}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor={formFieldUser.password.name}>
                    {formFieldUser.password.label}
                  </label>
                  <InputField
                    maxLength="128"
                    type={passwordType}
                    name={formFieldUser.password.name}
                    placeholder="Wpisz"
                  />
                  <button
                    type="button"
                    onClick={handlePasswordVisibility}
                    className={`${passwordType === "text" && "active"}`}
                  >
                    <img
                      className="eye"
                      src={passwordType === "text" ? EyeOff : EyeOn}
                      alt=""
                    />
                  </button>
                </Grid2>
              </Grid2>
              <ErrorMessage
                component="p"
                className="errorMessage"
                name={formFieldUser.password.name}
              />
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor={formFieldUser.confirmPassword.name}>
                    {formFieldUser.confirmPassword.label}
                  </label>
                  <InputField
                    maxLength="128"
                    type={repeatPasswordType}
                    name={formFieldUser.confirmPassword.name}
                    placeholder="Wpisz"
                  />
                  <button
                    type="button"
                    onClick={handleRepeatPasswordVisibility}
                    className={`${repeatPasswordType === "text" && "active"}`}
                  >
                    <img
                      className="eye"
                      src={repeatPasswordType === "text" ? EyeOff : EyeOn}
                      alt=""
                    />
                  </button>
                </Grid2>
              </Grid2>
              <ErrorMessage
                component="p"
                className="errorMessage"
                name={formFieldUser.confirmPassword.name}
              />
            </Inputs>

            <Grid2 container spacing={3}>
              <Grid2 xs={3}>
                <UpdateButton disabled={isValidating} name="next" type="submit">
                  Zapisz
                </UpdateButton>
              </Grid2>
            </Grid2>
            {error && <p className="errorMessage">Coś poszło nie tak</p>}
            {loading && <Loader />}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
