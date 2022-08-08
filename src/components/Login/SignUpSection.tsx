import { Link } from "react-router-dom";

import { ReactComponent as Google } from "assets/loginRegister/btnSigninwithGoogle.svg";
import { ReactComponent as Fb } from "assets/loginRegister/btnSigninwithFb.svg";
import logo from "assets/loginRegister/cat.png";
import GradientWrapper from "shared/loginRegister/InnerGradientWrapper";
import { ReturnButton } from "shared/loginRegister/ReturnButton";
import { SocialLogin } from "shared/loginRegister/SocialLogin";
import { SwitchLink } from "shared/loginRegister/SwitchLink";
import { Policy } from "shared/loginRegister/PrivacyPolicy";
import { BsArrowLeft } from "react-icons/bs";

const SignUpSection = () => (
  <GradientWrapper>
    <p className="title">Podaj łappkę!</p>
    <div>
      <img className="logo" src={logo} alt="" />
    </div>
    <p className="description">
      Zarejestruj się i dołącz do społeczności łappkowiczów
    </p>
    <SwitchLink>
      <Link to="/register">Zarejestruj się</Link>
    </SwitchLink>
    <SocialLogin name="register" side="left">
      <p>Lub zarejestruj się przez</p>
      <a href="###">
        <Fb />
      </a>
      <a href="###">
        <Google />
      </a>
    </SocialLogin>
    <Policy name="register" side="left">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
    <div className="return">
      <ReturnButton>
        <BsArrowLeft />
        Powrót do strony głównej
      </ReturnButton>
    </div>
  </GradientWrapper>
);

export default SignUpSection;
