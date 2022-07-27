import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";
import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import logo from "assets/cat.png";
import { SocialLogin } from "shared/SocialLogin";
import { SwitchLink } from "shared/SwitchLink";
import { Policy } from "shared/PrivacyPolicy";
import { ReturnButton } from "shared/ReturnButton";
import GradientWrapper from "shared/InnerGradientWrapper";

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
