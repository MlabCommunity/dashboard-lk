import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage, Formik } from "formik";
// import { useNavigate } from "react-router-dom";
// import { Loader } from "shared/dashboard/Loader";
import styled from "styled-components";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axiosInstance from "api/axios";

import { SectionLayout } from "shared/dashboard";
import { SubmitButton, Inputs, InputField } from "shared/loginRegister";
// import { useWorkerData } from "services/AddWorker";

const FormWrapper = styled(motion.div)`
  position: relative;
  text-align: left;
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
const InputWrapper = styled(Inputs)`
  padding: 0 2.4rem 2.4rem;
`;
const Title = styled("h2")`
  padding: 2.4rem 2.4rem 0.8rem;
  ${({ theme }) => theme.heading18Semi};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
`;
const Description = styled("p")`
  padding: 0 2.4rem 2.4rem;
  ${({ theme }) => theme.text12Regular};
  color: ${({ theme }) => theme.colorsGray.midGray1};
`;
const Controls = styled("div")`
  padding: 1.6rem 2.4rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.6rem;
  border-top: 1px solid ${({ theme }) => theme.colorsGray.lightGray4};
  button {
    ${({ theme }) => theme.buttonLarge};
    width: auto;
    margin-top: 0;
  }
  button[type="submit"] {
    margin-top: 0;
  }
`;
const Modal = styled("div")`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
`;

const AddWorkerSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface IInputValue {
  email: string;
}

export const Employee = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const navigate = useNavigate();

  // const { workerData } = useWorkerData();
  // const [{ error, loading }, sendEmail] = workerData(prop);

  useEffect(() => {
    const modalTimer = setTimeout(() => setShowModal(false), 3000);

    return () => {
      clearTimeout(modalTimer);
    };
  }, [showModal, setShowModal]);

  const handleFormSubmit = async (value: IInputValue) => {
    await axiosInstance
      .post(`/pet/shelters/workers/${value.email}`)
      .then((res) => {
        if (res.status === 204) {
          setShowModal(true);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <SectionLayout>
      <FormWrapper>
        {showModal && (
          <Modal>
            <p>Siema</p>
          </Modal>
        )}
        <Title className="title">Dodaj pracownika</Title>
        <Description className="description">
          Wpisz adres email użytkownika aplikacji Łappka i dodaj go do swojej
          organizacji.
        </Description>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={AddWorkerSchema}
          onSubmit={async (values, actions) => {
            actions.validateForm();
            handleFormSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <FormContainer onSubmit={props.handleSubmit}>
              <InputWrapper>
                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="email">Adres email</label>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Wpisz adres email"
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="email"
                />
              </InputWrapper>
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
