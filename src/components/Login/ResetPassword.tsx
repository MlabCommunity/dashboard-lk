import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import * as Yup from "yup";

import useUserData from "services/UserLoginData";
import {
  FormWrapper,
  override,
  SubmitButton,
  Inputs,
  InputField,
} from "shared/loginRegister";

const FormContainer = styled.form`
  button[type="submit"] {
    margin-top: 4rem;
  }
`;

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
}

export const ResetPassword = () => {
  const navigate = useNavigate();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  const handleFormSubmit = async (values: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 200) {
      navigate("/ResetSuccess");
    }
  };

  return (
    <FormWrapper>
      <h2 className="title">Zapomniałeś hasła?</h2>
      <p className="description">Podaj adres email użyty przy rejestracji.</p>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={async (values, actions) => {
          actions.validateForm();
          handleFormSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <FormContainer onSubmit={props.handleSubmit}>
            <Inputs>
              {loading && (
                <PuffLoader
                  color="green"
                  cssOverride={override}
                  speedMultiplier={1.5}
                />
              )}
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor="email">E-mail</label>
                  <InputField name="email" type="email" placeholder="Wpisz" />
                </Grid2>
              </Grid2>
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="email"
              />
            </Inputs>
            {error && <p className="errorMessage">Nieprawidłowy email</p>}
            <SubmitButton
              type="submit"
              name="next"
              disabled={props.isSubmitting}
            >
              Resetuj hasło
            </SubmitButton>
          </FormContainer>
        )}
      </Formik>
    </FormWrapper>
  );
};
