import styled from "styled-components";
import axios from "axios";
import { ErrorMessage, Formik, Field } from "formik";
import * as Yup from "yup";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { Policy } from "shared/PrivacyPolicy";
import { SubmitButton } from "shared/SubmitButton";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import { InputContainer } from "shared/InputContainer";
import { Inputs } from "shared/Inputs";
import { Input } from "../../shared/Input";

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

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Wymagane pole"),
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

const Form = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={SignInSchema}
    onSubmit={async (values, actions) => {
      actions.validateForm();
      axios.post("", { values }).then((res) => {
        console.log(res);
      });
      actions.setSubmitting(false);
      actions.resetForm();
    }}
  >
    {(props) => (
      <FormContainer onSubmit={props.handleSubmit}>
        <Inputs>
          <InputContainer>
            <img src={PersonLogo} alt="" />
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
          </InputContainer>
          {props.touched.email && props.errors.email && (
            <ErrorMessage component="p" className="error" name="email" />
          )}
          <InputContainer>
            <img src={PasswordLogo} alt="" />
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              placeholder="Podaj hasło"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <img className="eye" src={EyeIcon} alt="" />
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
          <a href="##">Zapomniałeś hasła?</a>
        </div>
        <SubmitButton type="submit" name="login" disabled={props.isSubmitting}>
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
);
export default Form;
