import { FormWrapper, SubmitButton } from "shared/loginRegister";
import { useNavigate } from "react-router-dom";

export const NewPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <FormWrapper>
      <h2 className="title">Dziękujemy</h2>
      <p className="description">Hasło zostało zmienione</p>
      <SubmitButton
        name="next"
        type="button"
        onClick={() => navigate("/auth/LoginForm")}
      >
        Zaloguj się
      </SubmitButton>
    </FormWrapper>
  );
};
