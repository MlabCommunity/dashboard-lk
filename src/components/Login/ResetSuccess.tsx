import { FormWrapper, SubmitButton } from "shared/loginRegister";
import { useNavigate } from "react-router-dom";

export const ResetSuccess = () => {
  const navigate = useNavigate();
  return (
    <FormWrapper>
      <h2 className="title">Dziękujemy</h2>
      <p className="description">
        Wysłalismy na adres email link do stworzenia nowego hasła.
      </p>
      <SubmitButton
        name="next"
        type="button"
        onClick={() => navigate("/auth/newPassword")}
      >
        Zamknij
      </SubmitButton>
    </FormWrapper>
  );
};
