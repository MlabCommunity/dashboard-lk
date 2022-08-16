import styled from "styled-components";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import InputField from "shared/loginRegister/InputField";
import { Inputs } from "shared/loginRegister/Inputs";
import { IInputTypes } from "types/axiosApi";
import { ErrorMessage } from "formik";

const Wrapper = styled.div`
  width: 100%;
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

const OrganizationForm = (props: IInputTypes) => {
  const {
    formField: {
      organizationName,
      streetName,
      zipcode,
      city,
      numberNIP,
      numberKRS,
    },
  } = props;

  return (
    <Wrapper>
      <Inputs>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="organizationName">{organizationName.label}</label>
            <InputField
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
            <label htmlFor="streetName">{streetName.label}</label>
            <InputField
              type="text"
              name={streetName.name}
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
            <label htmlFor="zipcode">{zipcode.label}</label>
            <InputField
              type="number"
              name={zipcode.name}
              placeholder="00-000"
            />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="zipcode"
            />
          </Grid2>
          <Grid2 xs={7}>
            <label htmlFor="city">{city.label}</label>
            <InputField type="text" name={city.name} placeholder="Wpisz" />
            <ErrorMessage component="p" className="errorMessage" name="city" />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="numberNIP">{numberNIP.label}</label>
            <InputField
              type="number"
              name={numberNIP.name}
              placeholder="Wpisz"
            />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="numberNIP"
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={3}>
          <Grid2 xs={12}>
            <label htmlFor="numberKRS">{numberKRS.label}</label>
            <InputField
              type="number"
              name={numberKRS.name}
              placeholder="Wpisz"
            />
            <ErrorMessage
              component="p"
              className="errorMessage"
              name="numberKRS"
            />
          </Grid2>
        </Grid2>
      </Inputs>
    </Wrapper>
  );
};

export default OrganizationForm;
