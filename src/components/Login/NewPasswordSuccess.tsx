import { FormWrapper, SubmitButton } from "shared/loginRegister";
import { useNavigate } from "react-router-dom";

export const NewPasswordSuccess = () => {
  const navigate = useNavigate();
  return (
    <FormWrapper>
      <h2 className="title">Hasło zresetowane pomyślnie</h2>
      <p className="description">
        Twoje hasło zostało zresetowane. Możesz już zalogować się do swojego
        konta.
      </p>
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
