import LayoutWrapper from "shared/LayoutWrapper";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Register = () => (
  <LayoutWrapper isReversed>
    <SignIn />
    <SignUp />
  </LayoutWrapper>
);

export default Register;
