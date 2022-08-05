import styled from "styled-components";
import logo from "assets/Logo.png";
import { Policy } from "shared/PrivacyPolicy";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import PasswordLogo from "assets/password.png";
import { ErrorMessage, Formik, Field } from "formik";
import { InputContainer } from "shared/InputContainer";
import { Inputs } from "shared/Inputs";
import { Input } from "shared/Input";
import { SubmitButton } from "shared/SubmitButton";
import InnerWrapper from "shared/InnerWrapper";
import { SwitchLink } from "shared/SwitchLink";

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
  button {
    margin-bottom: 2rem;
  }
`;

const PasswordReminderSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

const PasswordReminder = () => (
  <InnerWrapper>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <p className="title">Zapomniałeś hasła?</p>
    <p className="description">
      Podaj email, na który zostanie wysłany link do zresetowania hasła
    </p>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={PasswordReminderSchema}
      onSubmit={async (values, actions) => {
        actions.validateForm();
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
              <img src={PasswordLogo} alt="" />
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
          </Inputs>
          <SubmitButton
            type="submit"
            name="login"
            disabled={props.isSubmitting}
          >
            Wyślij
          </SubmitButton>
        </FormContainer>
      )}
    </Formik>
    <SwitchLink>
      <Link to="/login">Powrót do logowania</Link>
    </SwitchLink>
    <Policy className="resetPasswordPolicy" name="login" side="left">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
  </InnerWrapper>
);

export default PasswordReminder;