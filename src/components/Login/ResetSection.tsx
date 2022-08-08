import LayoutWrapper from "shared/loginRegister/LayoutWrapper";
import PasswordReminder from "./PasswordReminder";
import SignUpSection from "./SignUpSection";

const ResetSection = () => (
  <LayoutWrapper isreversed={false}>
    <PasswordReminder />
    <SignUpSection />
  </LayoutWrapper>
);

export default ResetSection;
