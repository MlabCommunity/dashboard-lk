import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import * as Yup from "yup";

import EyeOn from "assets/loginRegister/Eye-on.png";
import EyeOff from "assets/loginRegister/Eye-off.png";
import { SubmitButton } from "shared/loginRegister/SubmitButton";
import { Inputs } from "shared/loginRegister/Inputs";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import useUserData from "services/UserLoginData";
import FormWrapper, { override } from "shared/loginRegister/FormWrapper";
import InputField from "shared/loginRegister/InputField";

const FormContainer = styled.form`
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.textGrey};

  label {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #252c32;
  }

  .passwordContainer {
    position: relative;
    button {
      position: absolute;
      top: 2rem;
      right: 2rem;
    }
  }
  .checkbox-section {
    padding-top: 1.2rem;
    display: flex;
    justify-content: space-between;
    opacity: 0.75;
    div {
      display: flex;
      input {
        accent-color: ${({ theme }) => theme.colors.green};
      }
      p {
        padding-left: 0.5rem;
      }
    }
    a {
      position: relative;
      text-decoration: none;
      color: #369871;
      line-height: 2.4rem;
      transition: color 0.3s;
      &::after {
        content: "";
        position: absolute;
        background-color: #43be8d;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        opacity: 0.2;
        transition: opacity 0.3s;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
  .errorMessage {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
  password: Yup.string().required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  const handleFormSubmit = async (values: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 200) {
      navigate("/dashboard");
    }
  };

  return (
    <FormWrapper>
      <h2 className="title">Zaloguj się</h2>
      <p className="description">Witaj ponownie!</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values, actions) => {
          actions.validateForm();
          handleFormSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
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
                  <InputField type="email" name="email" placeholder="Wpisz" />
                </Grid2>
              </Grid2>
              <ErrorMessage component="p" className="error" name="email" />
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor="password">Hasło</label>
                  <InputField
                    type={passwordType}
                    name="password"
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
              <ErrorMessage component="p" className="error" name="password" />
            </Inputs>
            {error && (
              <p className="errorMessage">Nieprawidłowy email lub hasło</p>
            )}
            <div className="checkbox-section">
              <div>
                <input type="checkbox" />
                <p>Pamiętaj mnie</p>
              </div>
              <Link to="/LoginLayout/ResetPassword">Zapomniałem hasła</Link>
            </div>
            <SubmitButton
              type="submit"
              name="next"
              disabled={props.isSubmitting}
            >
              Zaloguj się
            </SubmitButton>
          </FormContainer>
        )}
      </Formik>
    </FormWrapper>
  );
};
export default LoginForm;
