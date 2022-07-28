import styled from "styled-components";
import { Formik } from "formik";
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
const Inputs = styled.div`
  div:first-child {
    margin-top: 1.9rem;
  }
  .eye {
    margin-left: auto;
  }
  p.error {
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
  }
  .disabledError {
    visibility: hidden;
  }
`;

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Hasło musi zawierać conajmniej 6 znaków")
    .matches(/^(?=.*?[a-z])$/, "Wymagana: mała litera")
    //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    .matches(/^(?=.*?[A-Z])$/, "Wymagana: duża litera")
    .matches(/^(?=.*?[#?!@$%^&*-])$/, "Wymagany: znak specjalny #?!@$%^&*-")
    .matches(/^(?=.*?[0-9])$/, "Wymagana: cyfra 0-9")
    .required("Wymagane pole"),
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

const Form = () => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    }}
  >
    {(props) => (
      <FormContainer onSubmit={props.handleSubmit}>
        <Inputs>
          <InputContainer>
            <img src={PersonLogo} alt="" />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              // value={formik.values.email}
            />
          </InputContainer>
          {props.errors.email ? (
            <p className="error">{props.errors.email}</p>
          ) : (
            <p className="disabledError">.</p>
          )}
          <InputContainer>
            <img src={PasswordLogo} alt="" />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              // value={formik.values.password}
            />
            <img className="eye" src={EyeIcon} alt="" />
          </InputContainer>
          {props.errors.password ? (
            <p className="error">{props.errors.password}</p>
          ) : (
            <p className="disabledError">.</p>
          )}
        </Inputs>
        <div className="checkbox-section">
          <div>
            <input type="checkbox" />
            <p>Zapamiętaj mnie</p>
          </div>
          <a href="##">Zapomniałeś hasła?</a>
        </div>
        <SubmitButton type="submit" name="login">
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
