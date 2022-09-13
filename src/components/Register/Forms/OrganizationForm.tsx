import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ErrorMessage } from "formik";
import { IInputTypes } from "types/axiosApi";
import { Inputs, InputField } from "shared/loginRegister";

export const OrganizationForm = (props: IInputTypes) => {
  const {
    formField: {
      organizationName,
      street,
      zipCode,
      city,
      nip,
      krs,
      phoneNumber,
    },
  } = props;

  return (
    <Inputs>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="organizationName">{organizationName.label}</label>
          <InputField
            maxLength="64"
            type="text"
            name={organizationName.name}
            placeholder="Wpisz"
          />
          <ErrorMessage
            component="p"
            className="errorMessage"
            name="organizationName"
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="street">{street.label}</label>
          <InputField
            maxLength="64"
            type="text"
            name={street.name}
            placeholder="Wpisz"
          />
          <ErrorMessage
            component="p"
            className="errorMessage"
            name="streetName"
          />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={5}>
          <label htmlFor="zipcode">{zipCode.label}</label>
          <InputField
            maxLength="6"
            type="text"
            name={zipCode.name}
            placeholder="00-000"
          />
          <ErrorMessage component="p" className="errorMessage" name="zipcode" />
        </Grid2>
        <Grid2 xs={7}>
          <label htmlFor="city">{city.label}</label>
          <InputField
            maxLength="64"
            type="text"
            name={city.name}
            placeholder="Wpisz"
          />
          <ErrorMessage component="p" className="errorMessage" name="city" />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="nip">{nip.label}</label>
          <InputField type="text" name={nip.name} placeholder="Wpisz" />
          <ErrorMessage component="p" className="errorMessage" name="nip" />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="krs">{krs.label}</label>
          <InputField type="text" name={krs.name} placeholder="Wpisz" />
          <ErrorMessage component="p" className="errorMessage" name="krs" />
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 xs={12}>
          <label htmlFor="phoneNumber">{phoneNumber.label}</label>
          <InputField type="text" name={phoneNumber.name} placeholder="Wpisz" />
        </Grid2>
      </Grid2>
      <ErrorMessage component="p" className="errorMessage" name="phoneNumber" />
    </Inputs>
  );
};
