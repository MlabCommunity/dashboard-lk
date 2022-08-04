import LayoutWrapper from "shared/LayoutWrapper";
import PasswordReminder from "./PasswordReminder";
import SignUpSection from "./SignUpSection";

const ResetSection = () => (
  <LayoutWrapper isreversed={false}>
    <PasswordReminder />
    <SignUpSection />
  </LayoutWrapper>
);

export default ResetSection;
