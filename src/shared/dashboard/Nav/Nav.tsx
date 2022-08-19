import styled from "styled-components";
import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";
import Logo from "assets/dashboard/Logo.png";
import { Routes } from "services/Routes";
import { SideBarLink } from "./SideBarLink";

const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.colorsPrimary.white};
  padding: 1.6rem;
  border-right: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    padding: 0.4rem 0 4rem 1.6rem;
    margin-right: 100%;
  }
  a {
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.8rem 1.6rem;
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.003em;
    border-radius: 0.6rem;
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
    </div>
    <div>
      <p>Jan Kowalski</p>
      <button type="button">D</button>
    </div>
  </Navigation>
);
export default Nav;
