import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "api/axios";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { Policy } from "shared/PrivacyPolicy";
import { SubmitButton } from "shared/SubmitButton";
import logo from "assets/Logo.png";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import { InputContainer } from "shared/InputContainer";
import { Inputs } from "shared/Inputs";
import { Input } from "shared/Input";
import InnerWrapper from "shared/InnerWrapper";

const FormContainer = styled.form`
  padding: 3rem 0 0;
  margin: 0 auto;
  width: 95%;
  max-width: 34.4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 2.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textGrey};

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
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textGrey};
      transition: color 0.3s;
      &:hover {
        color: #232323;
      }
    }
  }
`;

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Wymagane pole"),
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

const Form = () => {
  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();

  const navigate = useNavigate();

  return (
    <InnerWrapper>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <p className="title">
        Zaloguj się <span className="hidden">do aplikacji</span>
      </p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values, actions) => {
          actions.validateForm();
          await axiosInstance
            .post("/auth/signin", {
              email: values.email,
              password: values.password,
            })
            .then((response) => {
              console.log(response);
              if (response.status === 200) {
                navigate("./dashboard");
              }
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
                  props.touched.email && props.errors.email && "errorBackground"
                }`}
              >
                <img src={PersonLogo} alt="" />
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Twój email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  className={`${
                    props.touched.email &&
                    props.errors.email &&
                    "errorBackground"
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
                  placeholder="Podaj hasło"
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
            </Inputs>
            <div className="checkbox-section">
              <div>
                <input type="checkbox" />
                <p>Zapamiętaj mnie</p>
              </div>
              <Link to="/resetPassword">Zapomniałeś hasła?</Link>
            </div>
            <SubmitButton
              type="submit"
              name="login"
              disabled={props.isSubmitting}
            >
              Zaloguj się
            </SubmitButton>
            <SocialLogin name="login" side="left">
              <p>Lub zaloguj się przez</p>
              <a href="###">
                <Fb />
              </a>
              <a href="###">
                <Google />
              </a>
            </SocialLogin>
            <Policy name="login" side="left">
              <a href="##">Regulamin</a>
              <a href="##">Polityka Prywatności</a>
            </Policy>
          </FormContainer>
        )}
      </Formik>
    </InnerWrapper>
  );
};
export default Form;
