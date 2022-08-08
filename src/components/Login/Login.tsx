import LayoutWrapper from "shared/loginRegister/LayoutWrapper";
import Form from "./Form";
import SignUpSection from "./SignUpSection";

const Login = () => (
  <LayoutWrapper isreversed={false}>
    <Form />
    <SignUpSection />
  </LayoutWrapper>
);

export default Login;
