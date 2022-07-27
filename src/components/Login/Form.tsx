import styled from "styled-components";
import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { Policy } from "shared/PrivacyPolicy";
import { SubmitButton } from "shared/SubmitButton";
// import LayoutForm from "shared/LayoutForm";
import Inputs from "./Inputs";

const FormContainer = styled.form`
  padding: 3rem 0 0;
  margin: 0 auto;
  width: 95%;
  max-width: 34.4rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.textMedium};
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textGrey};

  .checkbox-section {
    display: flex;
    justify-content: space-between;
    mix-blend-mode: normal;
    opacity: 0.75;
    div {
      display: flex;
      p {
        padding-left: 0.5rem;
      }
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textGrey};
    }
  }
`;

const Form = () => {
  const saveEnteredDataHandler = (enteredData: any) => {
    const loginDetails = {
      ...enteredData,
    };
    console.log(loginDetails);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <Inputs onEnteredData={saveEnteredDataHandler} />
      <div className="checkbox-section">
        <div>
          <input type="checkbox" />
          <p>Zapamiętaj mnie</p>
        </div>
        <a href="##">Zapomniałeś hasła?</a>
      </div>
      <SubmitButton type="submit" name="login">
        Zaloguj się
      </SubmitButton>
      <SocialLogin name="login" side="left">
        <p>Lub zaloguj się przez</p>
        <a href="###">
          <Fb />
        </a>
        <a href="###">
          <Google />
        </a>
      </SocialLogin>
      <Policy name="login" side="left">
        <a href="##">Regulamin</a>
        <a href="##">Polityka Prywatności</a>
      </Policy>
    </FormContainer>
  );
};

export default Form;
