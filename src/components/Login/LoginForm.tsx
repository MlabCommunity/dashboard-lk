import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";
import * as Yup from "yup";

import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import useUserData from "services/UserLoginData";
import EyeOn from "assets/loginRegister/Eye-on.png";
import EyeOff from "assets/loginRegister/Eye-off.png";
import {
  FormWrapper,
  override,
  SubmitButton,
  Inputs,
  InputField,
} from "shared/loginRegister";

const FormContainer = styled.form`
  .checkbox-section {
    padding: 1.6rem 0 2.4rem;
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      input[type="checkbox"] {
        position: relative;
        height: 1.6rem;
        width: 1.6rem;
        opacity: 1;
        border-radius: 4px;
        accent-color: ${({ theme }) => theme.colorsPrimary.pr500};
        cursor: pointer;
        &:checked:before {
          content: "";
          display: block;
          position: absolute;
          width: 1.6rem;
          height: 1.6rem;
          top: 0;
          left: 0;
          border-radius: 4px;
          background-color: ${({ theme }) => theme.colorsPrimary.pr500};
        }
        &:checked:after {
          content: "";
          display: block;
          width: 4px;
          height: 9px;
          border: solid ${({ theme }) => theme.colorsBlackandWhite.white};
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(40deg);
          position: absolute;
          top: 1px;
          left: 5px;
        }
      }
      p {
        ${({ theme }) => theme.text14Regular};
        color: ${({ theme }) => theme.colorsGray.darkGray2};
        padding-left: 0.5rem;
      }
    }
    a {
      position: relative;
      text-decoration: none;
      ${({ theme }) => theme.text14Regular};
      color: ${({ theme }) => theme.colorsPrimary.pr600};
      transition: color 0.3s;
      &::after {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colorsPrimary.pr500};
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
    @media (min-width: 768px) {
      padding-bottom: 3.2rem;
    }
  }
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
  password: Yup.string().required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
  password: string;
  remember: boolean;
}

export const LoginForm = () => {
  const navigate = useNavigate();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  const handleFormSubmit = async ({ remember, ...values }: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (remember) {
      localStorage.setItem("remember", "true");
    }
    if (response.status === 200) {
      navigate("/dashboardSection");
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
          remember: false,
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
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="email"
              />
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor="password">Hasło</label>
                  <InputField
                    maxLength="128"
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
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="password"
              />
            </Inputs>
            {error && (
              <p className="errorMessage">Nieprawidłowy email lub hasło</p>
            )}
            <div className="checkbox-section">
              <div>
                <InputField type="checkbox" name="remember" />
                <p>Pamiętaj mnie</p>
              </div>
              <Link to="/auth/ResetPassword">Zapomniałem hasła</Link>
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
