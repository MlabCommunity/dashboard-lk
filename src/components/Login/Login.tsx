import LayoutWrapper from "shared/LayoutWrapper";
import SignInSection from "./SignInSection";
import SignUpSection from "./SignUpSection";

const Login = () => (
  <LayoutWrapper isReversed={false}>
    <SignInSection />
    <SignUpSection />
  </LayoutWrapper>
);

export default Login;
