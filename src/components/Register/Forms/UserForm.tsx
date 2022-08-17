import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage } from "formik";

import InputField from "shared/loginRegister/InputField";
import { Inputs } from "shared/loginRegister/Inputs";
import { IInputTypes } from "types/axiosApi";
import { useTogglePasswordVisibility } from "hooks/useTogglePasswordVisibility";
import EyeOn from "assets/loginRegister/Eye-on.png";
import EyeOff from "assets/loginRegister/Eye-off.png";

const UserForm = (props: IInputTypes) => {
  const {
    formField: { firstName, lastName, email, password, confirmPassword },
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
        <Grid2 className="passwordContainer" xs={12}>
          <label htmlFor="password">{password.label}</label>
          <InputField
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

export default UserForm;
