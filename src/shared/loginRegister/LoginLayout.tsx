import styled from "styled-components";
import Frame from "assets/loginRegister/Frame.png";
import LoginLogo from "assets/loginRegister/LoginLogo.png";
import ResetLogo from "assets/loginRegister/ResetLogo.png";
import Logo from "assets/dashboard/Logo.png";
import { Link, Outlet, useMatch } from "react-router-dom";
import CloseBtn from "assets/loginRegister/Close.png";
import { Routes } from "services/Routes";
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
    height: 100vh;
    .authSection-container {
      height: 100%;
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      .passwordContainer {
        position: relative;
        input {
          padding-right: 4rem;
        }
        button {
          position: absolute;
          top: 4.2rem;
          right: 2rem;
        }
      }
      .errorMessage {
        color: ${({ theme }) => theme.colorsRed.r500};
        font-size: ${({ theme }) => theme.fontSizes.textMedium};
        line-height: 2.2rem;
      }
      label {
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.colorsGray.darkGray2};
      }
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
  @media (min-width: 768px) {
    display: flex;
    width: 95vw;
    min-height: 86rem;
    background-color: ${({ theme }) => theme.colorsPrimary.white};
    box-shadow: 0px 0px 29px rgba(0, 0, 0, 0.15);
    max-width: 144rem;
    .authSection {
      height: unset;
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
      flex-direction: column;
      width: 48%;
      padding: 3.3rem 0;
      .buttons {
        align-self: flex-end;
        margin-right: 15%;
        flex-direction: row;
      }
      .heroImg {
        width: 80%;
        max-width: 45rem;
        position: absolute;
        top: 50%;
        transform: translateY(calc(-50% + 5rem));
      }
    }
  }
`;

const LoginLayout = () => {
  const location = window.location.pathname;

  const match = useMatch({
    path: location,
    end: true,
    caseSensitive: true,
  });

  const ImageHandler = () => {
    if (match?.pathname === Routes.register.path) {
      return Frame;
    }
    if (
      match?.pathname === Routes.LoginForm.path ||
      match?.pathname === Routes.Login.path
    ) {
      return LoginLogo;
    }
    return ResetLogo;
  };
  const LinkPathHandler = () => {
    if (
      match?.pathname === Routes.LoginForm.path ||
      match?.pathname === Routes.Login.path
    ) {
      return Routes.register.path;
    }
    return Routes.LoginForm.path;
  };

  return (
    <LayoutWrapper>
      <div className="authSection">
        <div className="authSection-container">
          <div className="controls">
            <img className="logo" src={Logo} alt="" />
            <div className="buttons">
              <ReturnLink>
                <Link className="login" to={LinkPathHandler()}>
                  {match?.pathname === Routes.register.path
                    ? "Zaloguj się"
                    : "Zarejestruj się"}
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
          <ReturnLink
            style={{
              display:
                match?.pathname !== Routes.LoginForm.path &&
                match?.pathname !== Routes.Login.path &&
                match?.pathname !== Routes.register.path
                  ? "none"
                  : "flex",
            }}
          >
            <Link className="login" to={LinkPathHandler()}>
              {match?.pathname === Routes.register.path
                ? "Zaloguj się"
                : "Zarejestruj się"}
            </Link>
          </ReturnLink>
          <Return>
            <Link className="return" to="/landing">
              <img src={CloseBtn} alt="" />
            </Link>
          </Return>
        </div>
        <img className="heroImg" src={ImageHandler()} alt="" />
      </div>
    </LayoutWrapper>
  );
};

export default LoginLayout;
