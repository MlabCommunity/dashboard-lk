import React, { useRef, useState } from "react";
import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IUpdateUserData } from "types/axiosApi";
import { Loader } from "shared/dashboard/Loader";
import { Formik, ErrorMessage } from "formik";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "api/axios";

import {
  FormWrapper,
  ModalBackground,
  Modal,
  Title,
  FormContainer,
  InputWrapper,
  Controls,
  Success,
} from "shared/dashboard/FormDashboardStyles";

import { InputField, SubmitButton } from "shared/loginRegister";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import { useUpdateUser } from "services/UpdateShelters";
import EyeOff from "assets/loginRegister/Eye-off.png";
import EyeOn from "assets/loginRegister/Eye-on.png";
import DeleteIcon from "assets/dashboard/DeleteIcon.png";
import ValidationSchema from "./FormModel/validationSchema";
import { formFieldUser } from "./FormModel/submitFormModel";
import { Crooper } from "../Crooper";

const LogoContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding-top: 0.8rem;
  margin-bottom: 1.6rem;
  .avatar {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
  button {
    margin: 0;
    width: 6.6rem;
    ${({ theme }) => theme.buttonMedium}
  }
`;
const UpdateButton = styled(SubmitButton)`
  margin-top: 0;
  margin-left: auto;
  width: auto;
  ${({ theme }) => theme.buttonLarge};
`;
const DeleteButton = styled(SubmitButton)`
  width: auto;
  margin: 3.2rem 0 0.8rem;
  background: ${({ theme }) => theme.colorsRed.r500};
  ${({ theme }) => theme.buttonLarge};
  img {
    padding-left: 1rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colorsRed.r600};
  }
`;

const fetchUserData = async () => {
  const response = await axiosInstance.get("/identity/User");
  return response.data;
};

export const UserSettings = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>();
  const [imageOptions, setImageOptions] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [temporaryImage, setTemporaryImage] = useState<any>("");

  const { useUserData } = useUpdateUser();
  const [{ loading, error }, onUserUpdate] = useUserData();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const handleEditUserSubmit = async (values: IUpdateUserData) => {
    const response = await onUserUpdate({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        profilePicture: imageUrl,
        // email: values.emailAddress,
        // password: values.password,
        // confirmPassword: values.confirmPassword,
      },
    });
    console.log(response);
  };
  const handleSubmit = (data: IUpdateUserData, actions: any) => {
    handleEditUserSubmit(data);
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const deleteUserHandler = async () => {
    await axiosInstance
      .delete("/identity/User")
      .then((res) => console.log(res));
  };

  const handleCloseCrooper = () => {
    setIsOpen(!isOpen);
    setImage("");
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFileModal = () => {
    inputRef.current?.click();
  };

  const onSelectImage = (event: any) => {
    if (event?.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setImageOptions({
          name: event.target.files[0].name,
          type: event.target.files[0].type,
        });
      });
      setIsOpen(true);
    }
  };

  const handleUpload = async (file: Blob) => {
    setTemporaryImage(file);
    const formData = new FormData();
    const blobFile = new File([file], imageOptions.name, {
      type: imageOptions.type,
    });
    console.log(blobFile);
    formData.append("file", blobFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axiosInstance
      .post("/files/Storage/picture", formData, config)
      .then((res) => {
        setImageUrl(res.data.url);
      });
  };

  const dataResult = useQuery(["UserData"], fetchUserData);

  if (dataResult.data === undefined) return <Loader />;

  const initialValues = {
    firstName: dataResult.data.firstName,
    lastName: dataResult.data.lastName,
    emailAddress: dataResult.data.email,
    password: "",
    confirmPassword: "",
    profilePicture: dataResult.data.profilePicture,
  };

  return (
    <FormWrapper>
      {"" && (
        <>
          <ModalBackground />
          <Modal>
            <Success />
          </Modal>
        </>
      )}
      <Title>Ustawienia użytkownika</Title>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={ValidationSchema[1]}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <FormContainer onSubmit={props.handleSubmit}>
            <InputWrapper>
              <LogoContainer>
                {dataResult.data === undefined ? (
                  <Loader />
                ) : (
                  <img
                    src={dataResult.data.profilePicture}
                    className="avatar"
                    alt=""
                  />
                )}

                <img className="avatar" src={temporaryImage} alt="" />
                {image && isOpen && (
                  <Crooper
                    image={image}
                    handleCloseCrooper={handleCloseCrooper}
                    onSaveCroppedImage={handleUpload}
                  />
                )}
                <SubmitButton
                  type="button"
                  name="prev"
                  onClick={handleInputFileModal}
                >
                  Edytuj
                </SubmitButton>
                <input
                  type="file"
                  accept="image/jpg, image/jpeg, image/png, image/bmp"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={onSelectImage}
                />
              </LogoContainer>
              <Grid2 container spacing={3}>
                <Grid2 xs={6}>
                  <label htmlFor={formFieldUser.firstName.name}>
                    {formFieldUser.firstName.label}
                  </label>
                  <InputField
                    maxLength="32"
                    type="text"
                    name={formFieldUser.firstName.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.firstName.name}
                  />
                </Grid2>
                <Grid2 xs={6}>
                  <label htmlFor={formFieldUser.lastName.name}>
                    {formFieldUser.lastName.label}
                  </label>
                  <InputField
                    maxLength="32"
                    type="text"
                    name={formFieldUser.lastName.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.lastName.name}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 xs={12}>
                  <label htmlFor={formFieldUser.emailAddress.name}>
                    {formFieldUser.emailAddress.label}
                  </label>
                  <InputField
                    type="email"
                    name={formFieldUser.emailAddress.name}
                    placeholder="Wpisz"
                  />
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.emailAddress.name}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor={formFieldUser.password.name}>
                    {formFieldUser.password.label}
                  </label>
                  <InputField
                    maxLength="128"
                    type={passwordType}
                    name={formFieldUser.password.name}
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
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.password.name}
                  />
                </Grid2>
              </Grid2>
              <Grid2 container spacing={3}>
                <Grid2 className="passwordContainer" xs={12}>
                  <label htmlFor={formFieldUser.confirmPassword.name}>
                    {formFieldUser.confirmPassword.label}
                  </label>
                  <InputField
                    maxLength="128"
                    type={repeatPasswordType}
                    name={formFieldUser.confirmPassword.name}
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
                  <ErrorMessage
                    component="p"
                    className="errorMessage"
                    name={formFieldUser.confirmPassword.name}
                  />
                </Grid2>
              </Grid2>
              <DeleteButton
                name="next"
                type="button"
                onClick={deleteUserHandler}
              >
                Usuń konto
                <img src={DeleteIcon} alt="" />
              </DeleteButton>
            </InputWrapper>

            {error && <p className="errorMessage">Coś poszło nie tak</p>}
            {loading && <Loader />}

            <Controls>
              <UpdateButton name="next" type="submit">
                Zapisz
              </UpdateButton>
            </Controls>
          </FormContainer>
        )}
      </Formik>
    </FormWrapper>
  );
};
