import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { Policy } from "shared/PrivacyPolicy";
import { SubmitButton } from "shared/SubmitButton";
import LayoutForm from "shared/LayoutForm";
import Inputs from "./Inputs";

const Form = () => (
  <LayoutForm>
    <Inputs />
    <div className="checkbox-section">
      <div>
        <input type="checkbox" />
        <p>Zapamiętaj mnie</p>
      </div>
      <a href="##">Zapomniałeś hasła?</a>
    </div>
    <SubmitButton name="login">Zaloguj się</SubmitButton>
    <SocialLogin name="login">
      <p>Lub zaloguj się przez</p>
      <a href="###">
        <Fb />
      </a>
      <a href="###">
        <Google />
      </a>
    </SocialLogin>
    <Policy name="login">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
  </LayoutForm>
);

export default Form;
