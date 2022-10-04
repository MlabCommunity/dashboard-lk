import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Loader } from "shared/dashboard/Loader";
import styled from "styled-components";
import * as Yup from "yup";
import { motion } from "framer-motion";

import { SectionLayout } from "shared/dashboard";
import { useEmailData } from "services/ResetPassword";
import { SubmitButton, Inputs, InputField } from "shared/loginRegister";

const FormWrapper = styled(motion.div)`
  padding: 0;
  max-width: 56rem;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray5};
  box-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
    0px 1px 2px rgba(91, 104, 113, 0.32);
  border-radius: 8px;
`;

const FormContainer = styled.form`
  button[type="submit"] {
    margin-top: 4rem;
  }
`;
const Title = styled("h2")`
  ${({ theme }) => theme.heading18Semi};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
`;
const Description = styled("p")`
  ${({ theme }) => theme.text12Regular};
  color: ${({ theme }) => theme.colorsGray.midGray1};
`;
const Controls = styled("div")`
  padding: 1.6rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    ${({ theme }) => theme.buttonLarge};
    width: auto;
    margin-top: 0;
  }
  button[type="submit"] {
    margin-top: 0;
  }
`;
// const Submit = styled(SubmitButton)`
//   width: auto;
// `
const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface ValuesProps {
  email: string;
}

export const Employee = () => {
  const navigate = useNavigate();

  const { useEmail } = useEmailData();
  const [{ error, loading }, sendEmail] = useEmail();

  const handleFormSubmit = async (value: ValuesProps) => {
    const response = await sendEmail({
      data: value,
    });
    if (response.status === 204) {
      navigate("/auth/ResetSuccess");
    }
  };

  return (
    <SectionLayout>
      <FormWrapper>
        <Title className="title">Dodaj pracownika</Title>
        <Description className="description">
          Wpisz adres email użytkownika aplikacji Łappka i dodaj go do swojej
          organizacji.{" "}
        </Description>
        <Formik
          initialValues={{
            email: "",
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
                  <Grid2 xs={12}>
                    <label htmlFor="email">E-mail</label>
                    <InputField name="email" type="email" placeholder="Wpisz" />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="email"
                />
              </Inputs>
              {error && (
                <p className="errorMessage">Podany adres email nie istnieje</p>
              )}
              <Controls>
                <SubmitButton type="button" name="prev">
                  Anuluj
                </SubmitButton>
                <SubmitButton
                  type="submit"
                  name="next"
                  disabled={props.isSubmitting}
                >
                  Dodaj
                </SubmitButton>
              </Controls>
            </FormContainer>
          )}
        </Formik>
      </FormWrapper>
    </SectionLayout>
  );
};
