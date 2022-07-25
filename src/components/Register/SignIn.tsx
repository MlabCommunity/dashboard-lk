import React from "react";
import styled from "styled-components";
import logo from "assets/Logo.png";

import Form from "../Login/Form";

const SignInWrapper = styled.div`
  .logo {
    padding: 2rem 0 1.5rem;
  }
  .title {
    position: relative;
    font-weight: bold;
    font-size: 4rem;
    line-height: 4.6rem;
    letter-spacing: 0.571428px;
    color: #43be8d;
    &::after {
      content: "";
      position: absolute;
      width: 8.4rem;
      height: 0.4rem;
      background-color: #43be8d;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 1.2rem);
    }
    .hidden {
      display: none;
    }
  }
  @media (min-width: 768px) {
    width: 60%;
    .logo {
      padding: 1.85rem 3rem;
      text-align: left;
    }
    .title {
      .hidden {
        display: inline;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 68rem;
  }
`;

const SignInSection = () => (
  <SignInWrapper>
    <div className="logo">
      <img src={logo} alt="" />
    </div>
    <p className="title">
      Zaloguj się <span className="hidden">do aplikacji</span>
    </p>
    <Form />
  </SignInWrapper>
);

export default SignInSection;
