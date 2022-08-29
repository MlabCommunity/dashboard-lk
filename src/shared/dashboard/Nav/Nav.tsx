import { Routes } from "services/Routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as OrganizationIcon } from "assets/dashboard/Organization.svg";
import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";
import Logo from "assets/dashboard/Logo.png";
import { useHandleLogout } from "services/HandleLogout";
import { SideBarLink } from "./SideBarLink";

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  border-right: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
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
  @media (min-width: 768px) {
    width: 25.6rem;
  }
`;

const Nav = () => (
  <Navigation>
    <div>
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
    <div>
      <p>Jan Kowalski</p>
      <Link to="/auth/LoginForm" onClick={useHandleLogout}>
        Wyloguj
      </Link>
    </div>
  </Navigation>
);
export default Nav;
