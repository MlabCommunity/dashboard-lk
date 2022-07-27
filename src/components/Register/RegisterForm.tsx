import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { SubmitButton } from "shared/SubmitButton";
import { Policy } from "shared/PrivacyPolicy";
import LayoutForm from "shared/LayoutForm";
import InputWrapper from "./InputWrapper";

const RegisterForm = () => (
  <LayoutForm>
    <InputWrapper />
    <SubmitButton name="register">Zarejestruj się</SubmitButton>
    <SocialLogin name="login" side="right">
      <p>Lub zarejestruj się przez</p>
      <a href="###">
        <Fb />
      </a>
      <a href="###">
        <Google />
      </a>
    </SocialLogin>
    <Policy name="login" side="right">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
  </LayoutForm>
);

export default RegisterForm;
