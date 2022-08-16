import styled from "styled-components";
import InputField from "shared/loginRegister/InputField";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage } from "formik";

import { Inputs } from "shared/loginRegister/Inputs";
import { IInputTypes } from "types/axiosApi";

const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.textGrey};
  label {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.8rem;
    color: #252c32;
  }

  .errorMessage {
    color: ${({ theme }) => theme.colors.warning};
  }
`;

const UserForm = (props: IInputTypes) => {
  const {
    formField: { firstName, lastName, email, password, confirmPassword },
  } = props;

  return (
    <Wrapper>
      <Inputs>
        <Grid2 container spacing={2}>
          <Grid2 xs={6}>
            <label htmlFor="firstName">{firstName.label}</label>
            <InputField type="text" name={firstName.name} placeholder="Wpisz" />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="firstName"
            />
          </Grid2>
          <Grid2 xs={6}>
            <label htmlFor="lastName">{lastName.label}</label>
            <InputField type="text" name={lastName.name} placeholder="Wpisz" />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="lastName"
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="email">{email.label}</label>
            <InputField type="email" name={email.name} placeholder="Wpisz" />
            <ErrorMessage component="p" className="errorMessage" name="email" />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="password">{password.label}</label>
            <InputField
              type="password"
              name={password.name}
              placeholder="Wpisz"
            />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="password"
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="confirmPassword">{confirmPassword.label}</label>
            <InputField
              type="password"
              name={confirmPassword.name}
              placeholder="Wpisz"
            />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="confirmPassword"
            />
          </Grid2>
        </Grid2>
      </Inputs>
    </Wrapper>
  );
};

export default UserForm;
