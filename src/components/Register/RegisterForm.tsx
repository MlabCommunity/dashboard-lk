import styled from "styled-components";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { SubmitButton } from "shared/SubmitButton";
import { Policy } from "shared/PrivacyPolicy";
import LayoutForm from "shared/LayoutForm";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import Envelope from "assets/envelope.png";
import { InputContainer } from "shared/InputContainer";
import { Input } from "../../shared/Input";

const Inputs = styled.div`
  .eye {
    margin-left: auto;
  }
  .error {
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
  }
  .disabledError {
    visibility: hidden;
  }
`;

const RegisterForm = () => (
  <LayoutForm>
    <Inputs>
      <InputContainer>
        <img src={PersonLogo} alt="" />
        <Input type="text" placeholder="Imię i Nazwisko" />
      </InputContainer>
      <p>Wprowadź poprawne dane</p>
      <InputContainer>
        <img src={Envelope} alt="" />
        <Input type="email" placeholder="Twój email" />
      </InputContainer>
      <p>Nieprawidłowy email</p>
      <InputContainer>
        <img src={PasswordLogo} alt="" />
        <Input type="password" placeholder="Hasło" />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <p>Wymagane: min. 6 znaków, A-z, 0-9, znak specjalny.</p>
      <InputContainer>
        <img src={PasswordLogo} alt="" />
        <Input type="password" placeholder="Powtórz hasło" />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <p>Hasła muszą być takie same</p>
    </Inputs>
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
