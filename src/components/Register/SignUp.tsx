import logo from "assets/Logo.png";
import InnerWrapper from "shared/InnerWrapper";
import RegisterForm from "./RegisterForm";

const SignUp = () => (
  <InnerWrapper>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <p className="title">Zarejestruj się</p>
    <RegisterForm />
  </InnerWrapper>
);

export default SignUp;
