import LayoutWrapper from "shared/LayoutWrapper";
import Form from "./Form";
import SignUpSection from "./SignUpSection";

const Login = () => (
  <LayoutWrapper isReversed={false}>
    <Form />
    <SignUpSection />
  </LayoutWrapper>
);

export default Login;
