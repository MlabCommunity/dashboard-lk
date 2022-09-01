import React, { useRef, useState } from "react";
import { Routes } from "services/Routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as OrganizationIcon } from "assets/dashboard/Organization.svg";
import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";
import Logo from "assets/dashboard/Logo.png";
import UserLogo from "assets/dashboard/UserLogo.png";
import { ReactComponent as ArrowDown } from "assets/dashboard/ArrowDown.svg";
import { useHandleLogout } from "services/HandleLogout";
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

  width: 80%;
  position: absolute;
  z-index: 1000;

  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  border-right: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  border-bottom: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};

  transform: translateX(-150%);
  .active {
    transform: translateX(0);
  }

  .links {
    img {
      padding: 0.4rem 0 4rem 1.6rem;
      margin-right: 100%;
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
      color: ${({ theme }) => theme.colorsGray.darkGray2};
      text-decoration: none;
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2rem;
      letter-spacing: -0.003em;
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
    min-width: 20rem;
    width: 20%;
    max-width: 25.6rem;
    transform: translateX(0);
  }
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    refButton: buttonRef,
    handler: toggleOpen,
  });

  return (
    <Navigation>
      <div className="links">
        <img src={Logo} alt="" />
        <SideBarLink to={Routes.dashboard.path}>
          <HomeIcon />
          Dashboard
        </SideBarLink>
        <SideBarLink to={Routes.messages.path}>
          <ChatIcon />
          Wiadomości
        </SideBarLink>
        <SideBarLink to={Routes.animalCards.path}>
          <SmileIcon />
          Karty Zwierząt
        </SideBarLink>
        <SideBarLink to={Routes.volunteering.path}>
          <HeartIcon />
          Wolontariat
        </SideBarLink>
        <p className="organization">organizacja</p>
        <SideBarLink to={Routes.organization.path}>
          <OrganizationIcon />
          Pracownicy
        </SideBarLink>
      </div>
      <div style={{ display: "flex" }}>
        <img src={UserLogo} alt="" />
        <DropDownButton
          type="button"
          onClick={toggleOpen}
          ref={buttonRef}
          style={{ position: "relative" }}
        >
          <p>Jan Kowalski</p>
          <ArrowDown className={`${isOpen && "active"}`} />
          {isOpen && (
            <DropDownListContainer ref={containerRef}>
              <DropDownList>
                <Option>Ustawienia Konta</Option>
                <Option>
                  <Link to="/auth/LoginForm" onClick={useHandleLogout}>
                    Wyloguj się
                  </Link>
                </Option>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownButton>
      </div>
    </Navigation>
  );
};
export default Nav;
