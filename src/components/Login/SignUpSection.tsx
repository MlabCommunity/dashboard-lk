import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Fb } from "assets/btnSigninwithFb.svg";
import { ReactComponent as Google } from "assets/btnSigninwithGoogle.svg";
import logo from "assets/cat.png";
import { SocialLogin } from "shared/SocialLogin";
import { Button } from "shared/Button";
import { Policy } from "shared/PrivacyPolicy";

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(180deg, #43be8d 8.98%, #0de18c 90.85%), #43be8d;
  box-shadow: inset 0px 0px 29.9351px rgba(0, 0, 0, 0.25);
  .logo {
    padding: 4rem 0 1rem;
  }
  .title {
    position: relative;
    padding-top: 5rem;
    font-weight: bold;
    font-size: 4rem;
    line-height: 4.6rem;
    letter-spacing: 0.571428px;
    color: #fff;
    &::after {
      content: "";
      position: absolute;
      width: 84px;
      height: 4px;
      background-color: #fff;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 12px);
    }
  }
  .description {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #ffffff;
    mix-blend-mode: normal;
  }
  .return {
    bottom: 0;
    background: #232233;
    margin-top: auto;
    button {
      padding: 1.5rem;
      background: transparent;
      border: none;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #ffffff;
      mix-blend-mode: normal;
      cursor: pointer;
    }
  }
  @media (min-width: 768px) {
    width: 40%;
    padding-top: 4rem;
    .logo {
      width: 12rem;
    }
    .description {
      padding: 0 5rem;
    }
  }
  @media (min-width: 1200px) {
    width: 42rem;
  }
`;

const SignUpSection = () => (
  <SignUpWrapper>
    <p className="title">Podaj łappkę!</p>
    <div>
      <img className="logo" src={logo} alt="" />
    </div>
    <p className="description">
      Zarejestruj się i dołącz do społeczności łappkowiczów
    </p>
    <Button type="button" name="register">
      <Link to="./register">Zarejestruj się</Link>
    </Button>
    <SocialLogin name="register">
      <p>Lub zarejestruj się przez</p>
      <a href="###">
        <Fb />
      </a>
      <a href="###">
        <Google />
      </a>
    </SocialLogin>
    <Policy name="register">
      <a href="##">Regulamin</a>
      <a href="##">Polityka Prywatności</a>
    </Policy>
    <div className="return">
      <button type="button">
        <span>.</span>Powrót do strony głównej
      </button>
    </div>
  </SignUpWrapper>
);

export default SignUpSection;
