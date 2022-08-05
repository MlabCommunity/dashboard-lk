import { PuffLoader } from "react-spinners";
import styled, { CSSProperties } from "styled-components";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { SubmitButton } from "shared/SubmitButton";
import { Policy } from "shared/PrivacyPolicy";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import Envelope from "assets/envelope.png";
import { InputContainer } from "shared/InputContainer";
import { Inputs } from "shared/Inputs";
import { Input } from "shared/Input";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import useRegisterData from "services/UserRegisterData";
import { useEffect, useState } from "react";

const FormContainer = styled.form`
  padding: 3rem 0 0;
  margin: 0 auto;
  width: 95%;
  max-width: 34.4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textGrey};

  .checkbox-section {
    display: flex;
    justify-content: space-between;
    mix-blend-mode: normal;
    opacity: 0.75;
    div {
      display: flex;
      p {
        padding-left: 0.5rem;
      }
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }
  .errorMessage {
    padding-top: 1rem;
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

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Wymagane pole"),
  firstName: Yup.string().required("Wymagane pole"),
  lastName: Yup.string().required("Wymagane pole"),
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
  password: Yup.string()
    .min(6, "Hasło musi zawierać conajmniej 6 znaków")
    .matches(/^(?=.*?[a-z])/, "Wymagana: mała litera")
    .matches(/^(?=.*?[A-Z])/, "Wymagana: duża litera")
    .matches(/^(?=.*?[#?!@$%^&*-])/, "Wymagany: znak specjalny #?!@$%^&*-")
    .matches(/^(?=.*?[0-9])/, "Wymagana: cyfra 0-9")
    .required("Wymagane pole"),
  confirmPassword: Yup.string()
    .required("Wymagane pole")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
});

interface ValuesProps {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("a");

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const navigate = useNavigate();

  const { useData } = useRegisterData();
  const [{ loading, error }, Register] = useData();

  useEffect(() => {
    if (error) {
      setErrorMessage(error.response?.data.reason);
    }
  }, [error]);

  const handleRegisterFormSubmit = async (values: ValuesProps) => {
    const response = await Register({
      data: values,
    });
    if (response.status === 400) {
      setErrorMessage(response.data.reason);
    }
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 201) {
      navigate("/login");
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, actions) => {
        actions.validateForm();
        handleRegisterFormSubmit(values);
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
            <InputContainer
              className={`${
                props.touched.username &&
                props.errors.username &&
                "errorBackground"
              }`}
            >
              <img src={PersonLogo} alt="" />
              <Field
                as={Input}
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.username &&
                  props.errors.username &&
                  "errorBackground"
                }`}
              />
            </InputContainer>
            {props.touched.username && props.errors.username && (
              <ErrorMessage component="p" className="error" name="username" />
            )}
            <InputContainer
              className={`${
                props.touched.firstName &&
                props.errors.firstName &&
                "errorBackground"
              }`}
            >
              <img src={PersonLogo} alt="" />
              <Field
                as={Input}
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Imię"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.firstName &&
                  props.errors.firstName &&
                  "errorBackground"
                }`}
              />
            </InputContainer>
            {props.touched.firstName && props.errors.firstName && (
              <ErrorMessage component="p" className="error" name="firstName" />
            )}
            <InputContainer>
              <img src={PersonLogo} alt="" />
              <Field
                as={Input}
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Nazwisko"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.lastName &&
                  props.errors.lastName &&
                  "errorBackground"
                }`}
              />
            </InputContainer>
            {props.touched.lastName && props.errors.lastName && (
              <ErrorMessage component="p" className="error" name="lastName" />
            )}
            <InputContainer
              className={`${
                props.touched.email && props.errors.email && "errorBackground"
              }`}
            >
              <img src={Envelope} alt="" />
              <Field
                as={Input}
                id="email"
                name="email"
                type="email"
                placeholder="Twój email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.email && props.errors.email && "errorBackground"
                }`}
              />
            </InputContainer>
            {props.touched.email && props.errors.email && (
              <ErrorMessage component="p" className="error" name="email" />
            )}
            <InputContainer
              className={`${
                props.touched.password &&
                props.errors.password &&
                "errorBackground"
              }`}
            >
              <img src={PasswordLogo} alt="" />
              <Field
                as={Input}
                id="password"
                name="password"
                type={passwordType}
                placeholder="Hasło"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.password &&
                  props.errors.password &&
                  "errorBackground"
                }`}
              />
              <button
                type="button"
                onClick={handlePasswordVisibility}
                className={`${passwordType === "text" && "active"}`}
              >
                <img className="eye" src={EyeIcon} alt="" />
              </button>
            </InputContainer>
            {props.touched.password && props.errors.password && (
              <ErrorMessage component="p" className="error" name="password" />
            )}
            <InputContainer
              className={`${
                props.touched.confirmPassword &&
                props.errors.confirmPassword &&
                "errorBackground"
              }`}
            >
              <img src={PasswordLogo} alt="" />
              <Field
                as={Input}
                id="confirmPassword"
                name="confirmPassword"
                type={repeatPasswordType}
                placeholder="Powtórz hasło"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.confirmPassword &&
                  props.errors.confirmPassword &&
                  "errorBackground"
                }`}
              />
              <button
                type="button"
                onClick={handleRepeatPasswordVisibility}
                className={`${repeatPasswordType === "text" && "active"}`}
              >
                <img className="eye" src={EyeIcon} alt="" />
              </button>
            </InputContainer>
            {props.touched.confirmPassword && props.errors.confirmPassword && (
              <ErrorMessage
                component="p"
                className="error"
                name="confirmPassword"
              />
            )}
          </Inputs>
          {error && <p className="errorMessage">{errorMessage}</p>}
          <SubmitButton name="register" type="submit">
            Zarejestruj się
          </SubmitButton>
          <SocialLogin name="login" side="right">
            <p>Lub zarejestruj się przez</p>
            <a href="###">
              <Fb />
            </a>
            <a href="###">
              <Google />
            </a>
          </SocialLogin>
          <Policy name="login" side="right">
            <a href="##">Regulamin</a>
            <a href="##">Polityka Prywatności</a>
          </Policy>
        </FormContainer>
      )}
    </Formik>
  );
};

export default RegisterForm;
