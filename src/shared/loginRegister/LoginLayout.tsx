import { useState } from "react";
import styled from "styled-components";
import Frame from "assets/loginRegister/Frame.png";
// import ResetLogo from "assets/loginRegister/ResetLogo.png"
import LoginLogo from "assets/loginRegister/LoginLogo.png";
import Logo from "assets/dashboard/Logo.png";
import { Link, Outlet } from "react-router-dom";
import CloseBtn from "assets/loginRegister/Close.png";
import { ReturnLink, Return } from "./ReturnLink";

const LayoutWrapper = styled("div")`
  background-color: #f0faf6;
  width: 100vw;

  .authSection,
  .heroSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.8rem 0;
  }
  .authSection {
    .authSection-container {
      text-align: left;
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
    min-height: 86rem;
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

const LoginLayout = () => {
  const location = window.location.pathname;
  const [currPath, setCurrentPath] = useState("/LoginLayout/LoginForm");

  console.log(location);

  return (
    <LayoutWrapper>
      <div className="authSection">
        <div className="authSection-container">
          <div className="controls">
            <img className="logo" src={Logo} alt="" />
            <div className="buttons">
              <ReturnLink>
                <Link
                  className="login"
                  onClick={() => setCurrentPath(location)}
                  to={currPath}
                >
                  {currPath === "/LoginLayout/Register"
                    ? "Zarejestruj się"
                    : "Zaloguj się"}
                </Link>
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
            <Link
              className="login"
              onClick={() => setCurrentPath(location)}
              to={currPath}
            >
              {currPath === "/LoginLayout/Register"
                ? "Zarejestruj się"
                : "Zaloguj się"}
            </Link>
          </ReturnLink>
          <Return>
            <Link className="return" to="/landing">
              <img src={CloseBtn} alt="" />
            </Link>
          </Return>
        </div>
        <img
          className="heroImg"
          src={currPath === "/LoginLayout/LoginForm" ? Frame : LoginLogo}
          alt=""
        />
      </div>
    </LayoutWrapper>
  );
};

export default LoginLayout;
