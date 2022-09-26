import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Loader } from "shared/dashboard/Loader";
import styled from "styled-components";
import * as Yup from "yup";

import { useEmailData } from "services/ResetPassword";
import {
  FormWrapper,
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

  const { useEmail } = useEmailData();
  const [{ error, loading }, sendEmail] = useEmail();

  const handleFormSubmit = async (value: ValuesProps) => {
    const response = await sendEmail({
      data: value,
    });
    if (response.status === 204) {
      navigate("/auth/ResetSuccess");
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
              {loading && <Loader />}
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
            {error && (
              <p className="errorMessage">Podany adres email nie istnieje</p>
            )}
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
