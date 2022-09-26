import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "shared/dashboard/Loader";
import * as Yup from "yup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import { useResetPasswordData } from "services/ResetPassword";
import EyeOn from "assets/loginRegister/Eye-on.png";
import EyeOff from "assets/loginRegister/Eye-off.png";
import {
  FormWrapper,
  Inputs,
  InputField,
  SubmitButton,
} from "shared/loginRegister";

const FormContainer = styled.form`
  button[type="submit"] {
    margin-top: 4rem;
  }
  .errorMessage {
    color: ${({ theme }) => theme.colorsRed.r500};
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
  confirmPassword: Yup.string()
    .required("Wymagane Pole")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
});

interface ValuesProps {
  password: string;
  confirmPassword: string;
}

export const NewPassword = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const { useResetPassword } = useResetPasswordData();
  const [{ error, loading }, setPassword] = useResetPassword(postId!);

  // UP

  const handleFormSubmit = async (values: ValuesProps) => {
    const response = await setPassword({
      data: {
        password: values.password,
        confirmPassword: values.confirmPassword,
        // email: EMAIL FROM URL HERE,
      },
    });
    if (response.status === 204) {
      navigate("/auth/NewPasswordSuccess");
    }
  };

  return (
    <FormWrapper>
      <h2 className="title">Utwórz nowe hasło</h2>
      <p className="description">Hasło powinno mieć m.in. 8 znaków.</p>
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
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
              {loading && <Loader />}
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
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor="confirmPassword">Potwierdź hasło</label>
                  <InputField
                    maxLength="128"
                    type={repeatPasswordType}
                    name="confirmPassword"
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
                name="confirmPassword"
              />
            </Inputs>
            {error && <p className="errorMessage">Nieprawidłowe dane</p>}
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
