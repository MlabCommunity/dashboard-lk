// import { ReactNode } from "react";
import styled from "styled-components";
import Frame from "assets/dashboard/Frame.png";
import Logo from "assets/dashboard/Logo.png";
import Arrow from "assets/dashboard/Arrow-left.png";
import { Link, Outlet } from "react-router-dom";
import { SwitchLink, Return } from "./SwitchLink";

const LayoutWrapper = styled("div")`
  background-color: #fff;
  width: 100vw;

  .authSection,
  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.3rem 0;
  }
  .authSection {
    .authSection-container {
      text-align: left;
      .logo {
        margin: 0 3.3rem 3.3rem 0;
      }
    }
  }
  .heroSection {
    position: relative;
    flex-direction: column-reverse;
    background-color: #f0faf6;
    .buttons {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
    .heroImg {
      width: 80%;
      max-width: 45rem;
    }
  }

  @media (min-width: 576px) {
    .heroSection {
      flex-direction: column;
      .buttons {
        flex-direction: row;
        padding-bottom: 3rem;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    width: 95vw;
    height: 78rem;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    max-width: 144rem;
    .authSection {
      width: 52%;
    }
    .heroSection {
      width: 48%;
      .heroImg {
        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% + 7rem));
      }
    }
  }
`;

const LoginLayout = () => (
  <LayoutWrapper>
    <div className="authSection">
      <div className="authSection-container">
        <img className="logo" src={Logo} alt="" />
        <Outlet />
      </div>
    </div>
    <div className="heroSection">
      <div className="buttons">
        <Return>
          <Link to="/landing">
            <img src={Arrow} alt="" />
            Strona główna
          </Link>
        </Return>
        <SwitchLink>
          <Link to="/LoginLayout/LoginForm">Zaloguj się</Link>
        </SwitchLink>
      </div>
      <img className="heroImg" src={Frame} alt="" />
    </div>
  </LayoutWrapper>
);

export default LoginLayout;
