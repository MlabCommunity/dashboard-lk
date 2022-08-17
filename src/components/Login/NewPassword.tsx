import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import * as Yup from "yup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import EyeOn from "assets/loginRegister/Eye-on.png";
import EyeOff from "assets/loginRegister/Eye-off.png";
import { SubmitButton } from "shared/loginRegister/SubmitButton";
import { Inputs } from "shared/loginRegister/Inputs";
import useUserData from "services/UserLoginData";
import InputField from "shared/loginRegister/InputField";

import FormWrapper, { override } from "shared/loginRegister/FormWrapper";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";

const FormContainer = styled.form`
  button[type="submit"] {
    margin-top: 4rem;
  }
  .errorMessage {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Hasło musi zawierać conajmniej 6 znaków")
    .matches(/^(?=.*?[a-z])/, "Wymagana: mała litera")
    .matches(/^(?=.*?[A-Z])/, "Wymagana: duża litera")
    .matches(/^(?=.*?[#?!@$%^&*-])/, "Wymagany: znak specjalny #?!@$%^&*-")
    .matches(/^(?=.*?[0-9])/, "Wymagana: cyfra 0-9")
    .required("Wymagane Pole"),
  passwordConfirm: Yup.string()
    .required("Wymagane Pole")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
});

interface ValuesProps {
  password: string;
  passwordConfirm: string;
}

const ResetPassword = () => {
  const navigate = useNavigate();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  const handleFormSubmit = async (values: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    if (response.status === 200) {
      navigate("/ResetSuccess");
    }
  };

  return (
    <FormWrapper>
      <h2 className="title">Utwórz nowe hasło</h2>
      <p className="description">Hasło powinno mieć m.in. 8 znaków.</p>
      <Formik
        initialValues={{
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={ResetPasswordSchema}
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
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="password"
              />
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor="passwordConfirm">Potwierdź hasło</label>
                  <InputField
                    type={repeatPasswordType}
                    name="passwordConfirm"
                    placeholder="Wpisz"
                  />
                  <button
                    type="button"
                    onClick={handleRepeatPasswordVisibility}
                    className={`${repeatPasswordType === "text" && "active"}`}
                  >
                    <img
                      className="eye"
                      src={repeatPasswordType === "text" ? EyeOff : EyeOn}
                      alt=""
                    />
                  </button>
                </Grid2>
              </Grid2>
              <ErrorMessage
                component="p"
                className="errorMessage"
                name="passwordConfirm"
              />
            </Inputs>
            {error && <p className="errorMessage">Nieprawidłowy email</p>}
            <SubmitButton
              type="submit"
              name="next"
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
