import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage, Formik } from "formik";
import { useNavigate } from "react-router-dom";
// import { Loader } from "shared/dashboard/Loader";
import * as Yup from "yup";
import axiosInstance from "api/axios";

import { SectionLayout } from "shared/dashboard";
import { SubmitButton, InputField } from "shared/loginRegister";
import { ReactComponent as Success } from "assets/dashboard/WorkerSuccess.svg";
import {
  FormWrapper,
  ModalBackground,
  Modal,
  Title,
  Description,
  FormContainer,
  InputWrapper,
  Controls,
} from "./WorkerComponents";

const AddWorkerSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
});

interface IInputValue {
  email: string;
}

export const Employee = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [resError, setResError] = useState<boolean>();
  const [errorUserExist, setErrorUserExist] = useState<string>("");

  const navigate = useNavigate();

  // const { workerData } = useWorkerData();
  // const [{ error, loading }, sendEmail] = workerData(prop);

  useEffect(() => {
    const modalTimer = setTimeout(() => setShowModal(false), 2200);

    return () => {
      clearTimeout(modalTimer);
    };
  }, [showModal, setShowModal]);

  const handleFormSubmit = async (value: IInputValue) => {
    await axiosInstance
      .post(`/pet/shelters/workers/${value.email}`)
      .then((res) => {
        if (res.status === 204) {
          setResError(false);
          setShowModal(true);
        }
      })
      .catch((error) => {
        if (error.message === "Worker already exists" && error.status === 400) {
          setErrorUserExist("Użytkownik o takim adresie email jest już dodany");
        }
        if (error) {
          setResError(true);
        }
        return error;
      });
  };

  const returnHandler = () => {
    navigate("/organizationSection");
  };

  return (
    <SectionLayout>
      <FormWrapper>
        {showModal && (
          <>
            <ModalBackground />
            <Modal>
              <Success /> <p>Pomyślnie dodano pracownika</p>
            </Modal>
          </>
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
            await handleFormSubmit(values);
            if (resError === true) {
              console.log(resError);
            } else {
              console.log(resError);
              actions.setSubmitting(false);
              actions.resetForm();
            }
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

              {resError && (
                <p className="errorMessage" style={{ padding: "0 2.4rem" }}>
                  Coś poszło nie tak
                </p>
              )}
              {errorUserExist !== "" && (
                <p className="errorMessage">{errorUserExist}</p>
              )}

              <Controls>
                <SubmitButton type="button" name="prev" onClick={returnHandler}>
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
