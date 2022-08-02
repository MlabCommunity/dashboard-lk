// import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";

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
`;

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Wymagane pole"),
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

const RegisterForm = () => {
  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, actions) => {
        actions.validateForm();
        axios
          .post("http://lappka.mobitouch.pl/api/identity/auth/signin", {
            values,
          })
          .then((res) => {
            console.log(res);
          });
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(props) => (
        <FormContainer onSubmit={props.handleSubmit}>
          <Inputs>
            <InputContainer
              className={`${
                props.touched.name && props.errors.name && "errorBackground"
              }`}
            >
              <img src={PersonLogo} alt="" />
              <Field
                as={Input}
                id="name"
                name="name"
                type="text"
                placeholder="Imię i nazwisko"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                className={`${
                  props.touched.name && props.errors.name && "errorBackground"
                }`}
              />
            </InputContainer>
            {props.touched.name && props.errors.name && (
              <ErrorMessage component="p" className="error" name="name" />
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
                <img src={EyeIcon} alt="" />
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
