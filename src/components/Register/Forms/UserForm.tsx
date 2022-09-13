import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { IInputTypes } from "types/axiosApi";
import { ErrorMessage } from "formik";

import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import { Inputs, InputField } from "shared/loginRegister";
import EyeOff from "assets/loginRegister/Eye-off.png";
import EyeOn from "assets/loginRegister/Eye-on.png";

export const UserForm = (props: IInputTypes) => {
  const {
    formField: { firstName, lastName, emailAddress, password, confirmPassword },
  } = props;

  const [passwordType, handlePasswordVisibility] =
    useTogglePasswordVisibility();
  const [repeatPasswordType, handleRepeatPasswordVisibility] =
    useTogglePasswordVisibility();

  return (
    <Inputs>
      <Grid2 container spacing={2}>
        <Grid2 xs={6}>
          <label htmlFor="firstName">{firstName.label}</label>
          <InputField
            maxLength="32"
            type="text"
            name={firstName.name}
            placeholder="Wpisz"
          />
          <ErrorMessage
            component="p"
            className="errorMessage"
            name="firstName"
          />
        </Grid2>
        <Grid2 xs={6}>
          <label htmlFor="lastName">{lastName.label}</label>
          <InputField
            maxLength="32"
            type="text"
            name={lastName.name}
            placeholder="Wpisz"
          />
          <ErrorMessage
            component="p"
            className="errorMessage"
            name="lastName"
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="emailAddress">{emailAddress.label}</label>
          <InputField
            type="emailAddress"
            name={emailAddress.name}
            placeholder="Wpisz"
          />
          <ErrorMessage
            component="p"
            className="errorMessage"
            name="emailAddress"
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 className="passwordContainer" xs={12}>
          <label htmlFor="password">{password.label}</label>
          <InputField
            maxLength="128"
            type={passwordType}
            name={password.name}
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
      <ErrorMessage component="p" className="errorMessage" name="password" />
      <Grid2 container spacing={3}>
        <Grid2 className="passwordContainer" xs={12}>
          <label htmlFor="confirmPassword">{confirmPassword.label}</label>
          <InputField
            maxLength="128"
            type={repeatPasswordType}
            name={confirmPassword.name}
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
  );
};
