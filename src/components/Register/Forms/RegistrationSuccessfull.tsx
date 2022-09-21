import styled from "styled-components";
import { SubmitButton } from "shared/loginRegister";
import { useNavigate } from "react-router-dom";

const Wrapper = styled("div")`
  .title-text {
    padding-top: 2rem;
    ${({ theme }) => theme.heading24Semi}
    color: ${({ theme }) => theme.colorsPrimary.pr800};
  }
  .description {
    padding: 3rem 0 1rem;
  }
`;

const RegistrationSuccessfull = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <p className="title-text">Zarejestrowano pomyślnie</p>
      <p className="description">Przejdź do logowania</p>
      <SubmitButton
        name="next"
        type="button"
        onClick={() => navigate("/auth/LoginForm")}
      >
        Zaloguj się
      </SubmitButton>
    </Wrapper>
  );
};

export default RegistrationSuccessfull;
