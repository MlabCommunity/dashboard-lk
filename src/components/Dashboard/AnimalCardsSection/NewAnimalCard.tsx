import { SectionLayout } from "shared/dashboard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate, Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";

import { Select } from "shared/dashboard/Select";
import Plus from "assets/dashboard/Plus.png";
import useUserData from "services/UserLoginData";
import {
  SubmitButton,
  Inputs,
  InputField,
  ReturnLink,
} from "shared/loginRegister";

const FormWrapper = styled("div")`
  padding: 2.4rem 0;
  margin: 0 auto;
  width: clamp(27rem, 80vw, 56rem);
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
    0px 1px 2px rgba(16, 24, 40, 0.06);
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 4rem 0 2.4rem;
    margin: unset;
  }
`;
const FormContainer = styled("form")`
  text-align: left;
  .controls {
    padding: 1.6rem 2.4rem 0;
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;
    border-top: 1px solid ${({ theme }) => theme.colorsGray.lightGray4};
    button,
    div a {
      ${({ theme }) => theme.buttonLarge}
    }
    button {
      margin-top: 0;
    }
    div {
      height: auto;
    }
  }
  .photos-title {
    ${({ theme }) => theme.text13Medium};
    color: ${({ theme }) => theme.colorsGray.darkGray2};
  }
`;

const FileInputWrapper = styled("div")`
  width: 100%;
  height: 4rem;
  ${({ theme }) => theme.text14Regular};
  color: ${({ theme }) => theme.colorsGray.darkGray2};
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  border: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
  border-radius: 0.6rem;
  outline: none;
  &:focus {
    border: 1px solid #1a73e8;
  }
  label {
    padding-left: 1.6rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.text14Regular};
    color: ${({ theme }) => theme.colorsGray.midGray4};
    overflow: hidden;
    cursor: pointer;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 4rem;
      background: ${({ theme }) => theme.colorsGray.lightGray4};
      border-left: 1px solid ${({ theme }) => theme.colorsGray.lightGray1};
      border-radius: 0 0.5rem 0.5rem 0;
    }
  }
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Niepoprawny email").required("Wymagane pole"),
  password: Yup.string().required("Wymagane pole"),
});

interface ValuesProps {
  name: string;
  breed: string;
  gender: string;
  color: string;
  weight: string;
  isSterilized: boolean;
}

export const NewAnimalCard = () => {
  const navigate = useNavigate();

  const { useLoginData } = useUserData();
  const [{ error, loading }, login] = useLoginData();

  // eslint-disable-next-line no-unused-vars
  const handleFormSubmit = async ({ ...values }: ValuesProps) => {
    const response = await login({
      data: values,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    // if (remember) {
    //   localStorage.setItem("remember", "true");
    // }
    if (response.status === 200) {
      navigate("/dashboardSection");
    }
  };
  if (loading) console.log("tak");

  return (
    <SectionLayout>
      <FormWrapper>
        <Formik
          initialValues={{
            email: "",
            password: "",
            remember: false,
            photos: [],
          }}
          validationSchema={SignInSchema}
          onSubmit={async (values, actions) => {
            actions.validateForm();
            // handleFormSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {(props) => (
            <FormContainer onSubmit={props.handleSubmit}>
              <Inputs style={{ padding: "0 2.4rem 2.4rem" }}>
                <Grid2 container spacing={3}>
                  <Grid2 columnSpacing={5} xs={12}>
                    <label htmlFor="name">Imię zwierzaka</label>
                    <InputField type="name" name="name" placeholder="Wpisz" />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="name"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="breed">Gatunek</label>
                    <Select
                      selectId="breed"
                      options={["Pies", "Kot", "Inne.."]}
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="breed"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="gender">Płeć</label>
                    <Select
                      selectId="gender"
                      options={["Samiec", "Samiczka"]}
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="gender"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="color">Umaszczenie</label>
                    <Select
                      selectId="color"
                      options={["Czerwony", "Zielony"]}
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="color"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="weight">Waga</label>
                    <InputField
                      type="text"
                      name="weight"
                      placeholder="Kilogramy"
                    />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="weight"
                />

                <Grid2 container spacing={3}>
                  <Grid2 columnSpacing={5} xs={12}>
                    <p className="photos-title">Dodaj zdjęcia</p>
                    <FileInputWrapper tabIndex={0}>
                      <label htmlFor="photos">
                        Dodaj
                        <InputField
                          type="file"
                          id="photos"
                          name="photos"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                        <div>
                          <img src={Plus} alt="" />
                        </div>
                      </label>
                    </FileInputWrapper>
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="name"
                />

                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <label htmlFor="isSterilized">Sterylizacja</label>
                    <Select selectId="isSterilized" options={["Tak", "Nie"]} />
                  </Grid2>
                </Grid2>
                <ErrorMessage
                  component="p"
                  className="errorMessage"
                  name="weight"
                />
              </Inputs>
              {error && <p className="errorMessage">Coś poszło nie tak</p>}
              <div className="controls">
                <ReturnLink>
                  <Link to="/animalCardsSection">Anuluj</Link>
                </ReturnLink>
                <SubmitButton
                  type="submit"
                  name="next"
                  disabled={props.isSubmitting}
                  style={{ width: "unset" }}
                >
                  Zapisz
                </SubmitButton>
              </div>
            </FormContainer>
          )}
        </Formik>
      </FormWrapper>
    </SectionLayout>
  );
};
