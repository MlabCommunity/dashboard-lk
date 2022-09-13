import { useRef, useState } from "react";
import { Routes } from "services/Routes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { ReactComponent as OrganizationIcon } from "assets/dashboard/Organization.svg";
import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";
import Logo from "assets/dashboard/Logo.png";
import UserLogo from "assets/dashboard/UserLogo.png";
import { ReactComponent as ArrowDown } from "assets/dashboard/ArrowDown.svg";
import { useHandleLogout } from "services/HandleLogout";
import { ReactComponent as Close } from "assets/dashboard/Close.svg";
import {
  DropDownListContainer,
  DropDownButton,
  DropDownList,
  Option,
} from "shared/dashboard/DropDown";
import { useClickOutside } from "hooks/useClickOutside";
import { SideBarLink } from "./SideBarLink";

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 1000;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  border-right: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  border-bottom: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  overflow-y: scroll;
  overflow-x: hidden;

  opacity: 0;
  transform: translateX(-150%);
  transition: opacity 0.6s, transform 0.6s;
  &.active {
    opacity: 1;
    transform: translateX(0);
  }
  .dropdown {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    img {
      width: 4.2rem;
      height: 4.2rem;
    }
  }
  .links {
    .logo-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      img {
        padding: 0.4rem 0 4rem 1.6rem;
      }
      button {
        padding: 1rem;
        background: none;
        border: none;
        border-radius: 0.4rem;
        transition: background 0.3s;
        &:active {
          background: lightgray;
        }
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
    .organization {
      text-align: left;
      padding: 3rem 1.6rem 1rem;
      ${({ theme }) => theme.heading12Semi};
      text-transform: uppercase;
      color: ${({ theme }) => theme.colorsGray.midGray3};
    }
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.8rem 1.6rem;
      ${({ theme }) => theme.text14Medium};
      color: ${({ theme }) => theme.colorsGray.darkGray2};
      text-decoration: none;
      border-radius: 0.6rem;
      transition: background 0.4s;
      svg {
        margin: 0.4rem 1.2rem 0.4rem 0;
        path {
          color: ${({ theme }) => theme.colorsGray.midGray4};
        }
      }
      &.active {
        svg {
          path {
            color: ${({ theme }) => theme.colorsPrimary.pr500};
          }
        }
      }
      &:hover {
        background: ${({ theme }) => theme.colorsGray.lightGray4};
      }
    }
  }
  @media (min-width: 768px) {
    position: initial;
    height: initial;
    min-height: initial;
    width: 20%;
    min-width: 20rem;
    max-width: 25.6rem;
    transform: translateX(0);
    opacity: 1;
    overflow-y: initial;
    overflow-x: initial;
  }
`;

const DropDownContainer = styled(DropDownListContainer)`
  position: absolute;
  z-index: 500;
  top: unset;
  bottom: 100%;
  width: 17.1rem;
  left: -25%;
  @media (min-width: 768px) {
    left: 0;
  }
`;

const DropDownNavButton = styled(DropDownButton)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 0.6rem 0 0.6rem 0.6rem;
  .username {
    display: flex;
    align-items: center;
  }
  .organization-name {
    ${({ theme }) => theme.text12Regular};
    color: ${({ theme }) => theme.colorsPrimary.pr600};
  }
`;

interface IsHiddenProp {
  isHidden: boolean;
  toggleNav: () => void;
}

const LinkData = [
  {
    id: 1,
    icon: HomeIcon,
    route: Routes.dashboard.path,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: ChatIcon,
    route: Routes.messages.path,
    text: "Wiadomości",
  },
  {
    id: 3,
    icon: SmileIcon,
    route: Routes.animalCards.path,
    text: "Karty zwierząt",
  },
  {
    id: 4,
    icon: HeartIcon,
    route: Routes.volunteering.path,
    text: "Wolontariat",
  },
];

const url = "http://lappka.mobitouch.pl/identity/User";

export const Nav = ({ isHidden, toggleNav }: IsHiddenProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    refButton: buttonRef,
    handler: toggleOpen,
  });

  // eslint-disable-next-line no-unused-vars
  const { isLoading, data, isFetching } = useQuery(["userData"], async () => {
    try {
      const response = await axios(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Navigation className={isHidden ? "active" : ""}>
      <div className="links">
        <div className="logo-top">
          <img src={Logo} alt="" />
          <button type="button" onClick={toggleNav}>
            <Close />
          </button>
        </div>
        {LinkData.map((link) => (
          <SideBarLink key={link.id} onClick={toggleNav} to={link.route}>
            <link.icon /> {link.text}
          </SideBarLink>
        ))}
        <p className="organization">organizacja</p>
        <SideBarLink onClick={toggleNav} to={Routes.organization.path}>
          <OrganizationIcon />
          Pracownicy
        </SideBarLink>
      </div>
      <div className="dropdown">
        <img src={UserLogo} alt="" />
        <DropDownNavButton type="button" onClick={toggleOpen} ref={buttonRef}>
          <p className="username">
            Jan Kowalski <ArrowDown className={`${isOpen && "active"}`} />
          </p>

          <p className="organization-name">Psiaki Adopciaki z Psiej Wioski</p>
          {isOpen && (
            <DropDownContainer ref={containerRef}>
              <DropDownList>
                <Option>
                  <Link to="/accountSettings">Ustawienia konta</Link>
                </Option>
                <Option>
                  <Link to="/auth/LoginForm" onClick={useHandleLogout}>
                    Wyloguj się
                  </Link>
                </Option>
              </DropDownList>
            </DropDownContainer>
          )}
        </DropDownNavButton>
      </div>
    </Navigation>
  );
};
