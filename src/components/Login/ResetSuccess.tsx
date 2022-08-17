import FormWrapper from "shared/loginRegister/FormWrapper";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "shared/loginRegister/SubmitButton";

const ResetSuccess = () => {
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
        onClick={() => navigate("/newPassword")}
      >
        Zamknij
      </SubmitButton>
    </FormWrapper>
  );
};
export default ResetSuccess;