import LayoutWrapper from "shared/LayoutWrapper";
import SignIn from "./SignUp";
import SignUp from "./SignIn";

const Register = () => (
  <LayoutWrapper isreversed>
    <SignIn />
    <SignUp />
  </LayoutWrapper>
);

export default Register;
