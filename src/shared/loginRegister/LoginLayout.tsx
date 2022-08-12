import styled from "styled-components";
import Frame from "assets/dashboard/Frame.png";
import Logo from "assets/dashboard/Logo.png";
import { Link, Outlet } from "react-router-dom";
import CloseBtn from "assets/loginRegister/Close.png";
import { ReturnLink, Return } from "./ReturnLink";

const LayoutWrapper = styled("div")`
  background-color: #f0faf6;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 86rem;

  .authSection,
  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.8rem 0;
  }
  .authSection {
    height: 100%;

    .authSection-container {
      text-align: left;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      .controls {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: clamp(30rem, 80vw, 45.6rem);
        align-self: flex-start;
        .buttons {
          display: flex;
          align-items: flex-start;
        }
        .logo {
          margin-bottom: 3.3rem;
          width: 11.6rem;
          height: 2.8rem;
        }
      }
      .mainForm {
        align-self: flex-start;
      }
    }
  }
  .heroSection {
    display: none;
    position: relative;
    background-color: #f0faf6;
    .buttons {
      display: flex;
      align-items: center;
      a {
        transition: transform 0.3s;
      }
      .login {
        &:hover,
        &:focus {
          transform: scale(1.05);
        }
      }
      .return {
        &:hover,
        &:focus {
          transform: rotate(180deg);
        }
      }
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
    height: 86rem;
    min-height: unset;
    background-color: #fff;
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    max-width: 144rem;
    .authSection {
      width: 52%;
      padding: 3.3rem 0;
      .authSection-container {
        .controls {
          width: clamp(30rem, 45vw, 45.6rem);
          .buttons {
            display: none;
          }
        }
      }
    }
    .heroSection {
      display: flex;
      width: 48%;
      padding: 3.3rem 0;
      .heroImg {
        width: 80%;
        max-width: 45rem;
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
        <div className="controls">
          <img className="logo" src={Logo} alt="" />
          <div className="buttons">
            <ReturnLink>
              <Link to="/LoginLayout/LoginForm">Zarejestruj się</Link>
            </ReturnLink>
            <Return>
              <Link to="/landing">
                <img src={CloseBtn} alt="" />
              </Link>
            </Return>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
    <div className="heroSection">
      <div className="buttons">
        <ReturnLink>
          <Link className="login" to="/LoginLayout/Register">
            Zarejestruj się
          </Link>
        </ReturnLink>
        <Return>
          <Link className="return" to="/landing">
            <img src={CloseBtn} alt="" />
          </Link>
        </Return>
      </div>
      <img className="heroImg" src={Frame} alt="" />
    </div>
  </LayoutWrapper>
);

export default LoginLayout;
