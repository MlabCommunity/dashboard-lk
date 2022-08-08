import styled, { CSSProperties } from "styled-components";
import { ErrorMessage, Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import * as Yup from "yup";

import { ReactComponent as Google } from "assets/loginRegister/btnSigninwithGoogle.svg";
import { ReactComponent as Fb } from "assets/loginRegister/btnSigninwithFb.svg";
import PasswordLogo from "assets/loginRegister/password.png";
import PersonLogo from "assets/loginRegister/Vector.png";
import EyeIcon from "assets/loginRegister/ic_eye.png";
import logo from "assets/loginRegister/Logo.png";
import { InputContainer } from "shared/loginRegister/InputContainer";
import { SubmitButton } from "shared/loginRegister/SubmitButton";
import { SocialLogin } from "shared/loginRegister/SocialLogin";
import InnerWrapper from "shared/loginRegister/InnerWrapper";
import { Policy } from "shared/loginRegister/PrivacyPolicy";
import { Inputs } from "shared/loginRegister/Inputs";
import { Input } from "shared/loginRegister/Input";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import useUserData from "services/UserLoginData";

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
        color: ${({ theme }) => theme.colors.dark};
      }
    }
  }
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
  password: Yup.string().required("Wymagane pole"),
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
  password: string;
}

const Form = () => {
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
            {error && (
              <p className="errorMessage">Nieprawidłowy email lub hasło</p>
            )}
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
