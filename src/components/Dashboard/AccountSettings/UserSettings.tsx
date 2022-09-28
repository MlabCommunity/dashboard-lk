import React, { useRef, useState } from "react";
import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IUpdateUserData } from "types/axiosApi";
import { Loader } from "shared/dashboard/Loader";
import { Formik, Form, ErrorMessage } from "formik";

import {
  FormWrapper,
  InputField,
  Inputs,
  SubmitButton,
} from "shared/loginRegister";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import { useUpdateUser } from "services/UpdateShelters";
import ValidationSchema from "components/Register/FormModel/validationSchema";
import EyeOff from "assets/loginRegister/Eye-off.png";
import EyeOn from "assets/loginRegister/Eye-on.png";
import Avatar from "assets/dashboard/AvatarOrganization.png";
import DeleteIcon from "assets/dashboard/DeleteIcon.png";
import { formFieldUser } from "./FormModel/submitFormModel";
import { Crooper } from "../Crooper";

const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.6rem;
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
  margin: 3.2rem 0;
  background: ${({ theme }) => theme.colorsRed.r500};
  ${({ theme }) => theme.buttonLarge};
  img {
    padding-left: 1rem;
  }
  &:hover {
    background: ${({ theme }) => theme.colorsRed.r600};
  }
`;
const Title = styled("h2")`
  ${({ theme }) => theme.heading18Semi};
  color: ${({ theme }) => theme.colorsBlackandWhite.black};
  text-align: left;
  padding-bottom: 1.6rem;
`;

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
};

export const UserSettings = () => {
  const { useUserData } = useUpdateUser();
  const [{ loading, error }, onUserUpdate] = useUserData();

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  const handleEditOrganizationSubmit = async (values: IUpdateUserData) => {
    const response = await onUserUpdate({
      data: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.emailAddress,
        password: values.password,
        confirmPassword: values.confirmPassword,
      },
    });
    console.log(response);
  };
  const handleSubmit = (data: IUpdateUserData, actions: any) => {
    handleEditOrganizationSubmit(data);
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  const deleteUserHandler = () => {
    console.log("CLicked");
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<any>();
  console.log(image);

  const handleCloseCrooper = () => {
    setIsOpen(!isOpen);
    setImage({});
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFileModal = () => {
    inputRef.current?.click();
  };

  const onSelectImage = (event: any) => {
    if (event?.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => setImage(reader.result));
      setIsOpen(true);
    }
  };

  return (
    <FormWrapper>
      <Title>Ustawienia użytkownika</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema[1]}
        onSubmit={handleSubmit}
      >
        {({ isValidating }) => (
          <Form>
            <LogoContainer>
              <img className="avatar" src={Avatar} alt="" />
              {image && isOpen && (
                <Crooper
                  image={image}
                  handleCloseCrooper={handleCloseCrooper}
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
                accept="image/*"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={onSelectImage}
              />
            </LogoContainer>
            <Inputs>
              <Grid2 container spacing={2}>
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
            </Inputs>

            <Grid2 container spacing={3}>
              <Grid2 xs={12}>
                <DeleteButton
                  disabled={isValidating}
                  name="next"
                  type="button"
                  onClick={deleteUserHandler}
                >
                  Usuń konto
                  <img src={DeleteIcon} alt="" />
                </DeleteButton>
              </Grid2>
            </Grid2>

            <Grid2 container spacing={3}>
              <Grid2 xs={12}>
                <UpdateButton disabled={isValidating} name="next" type="submit">
                  Zapisz
                </UpdateButton>
              </Grid2>
            </Grid2>
            {error && <p className="errorMessage">Coś poszło nie tak</p>}
            {loading && <Loader />}
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
