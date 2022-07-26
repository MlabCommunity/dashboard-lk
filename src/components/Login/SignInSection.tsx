import InnerWrapper from "shared/InnerWrapper";
import logo from "assets/Logo.png";
import Form from "./Form";

const SignInSection = () => (
  <InnerWrapper>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <p className="title">
      Zaloguj się <span className="hidden">do aplikacji</span>
    </p>
    <Form />
  </InnerWrapper>
);

export default SignInSection;
