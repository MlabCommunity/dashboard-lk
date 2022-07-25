import React from "react";
import styled from "styled-components";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import { SocialLogin } from "shared/SocialLogin";
import { Button } from "shared/Button";
import { Policy } from "shared/PrivacyPolicy";
import Inputs from "./Inputs";

const FormContainer = styled.form`
  padding: 2rem 0;
  margin: 0 auto;
  width: 95%;
  max-width: 34.4rem;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #77838f;

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
      color: #77838f;
    }
  }
`;

const Form = () => (
  <FormContainer>
    <Inputs />
    <div className="checkbox-section">
      <div>
        <input type="checkbox" />
        <p>Zapamiętaj mnie</p>
      </div>
      <a href="##">Zapomniałeś hasła?</a>
    </div>
    <Button type="button" name="login">
      Zaloguj się
    </Button>
    <SocialLogin name="login">
      <p>Lub zaloguj się przez</p>
      <a href="###">
        <Fb />
      </a>
      <a href="###">
        <Google />
      </a>
    </SocialLogin>
    <Policy name="login">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
  </FormContainer>
);

export default Form;
