import styled, { CSSProperties } from "styled-components";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import * as Yup from "yup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { SubmitButton } from "shared/loginRegister/SubmitButton";
import { Inputs } from "shared/loginRegister/Inputs";
import useUserData from "services/UserLoginData";
import InputField from "shared/loginRegister/InputField";

import FormWrapper from "shared/loginRegister/FormWrapper";

const FormContainer = styled.form`
  max-width: 34.4rem;
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.textGrey};

  .errorMessage {
    color: ${({ theme }) => theme.colors.warning};
  }
`;
const override: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
};

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  const handleFormSubmit = async (values: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 200) {
      navigate("/LoginLayout/ResetSuccess");
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
        validationSchema={SignInSchema}
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
                  {/* <label htmlFor="email">password</label> */}
                  <InputField id="email" name="email" type="email" />
                </Grid2>
              </Grid2>
              <ErrorMessage component="p" className="error" name="email" />
            </Inputs>
            {error && <p className="errorMessage">Nieprawidłowy email</p>}
            <SubmitButton
              type="submit"
              name="login"
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
export default ResetPassword;
