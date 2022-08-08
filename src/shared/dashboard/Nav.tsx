import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "assets/dashboard/HomeNavIcon.svg";
import { ReactComponent as ChatIcon } from "assets/dashboard/ChatNavIcon.svg";
import { ReactComponent as SmileIcon } from "assets/dashboard/SmileNavIcon.svg";
import { ReactComponent as HeartIcon } from "assets/dashboard/HeartNavIcon.svg";
// import { useState } from "react";

const Navigation = styled.nav`
  width: 95vw;
  /* background-color: ${({ theme }) => theme.colors.green}; */
  background-color: #fff;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 1.6rem;
    color: "#252C32";
    svg {
      margin: 0.4rem 1.2rem 0.4rem 0;
      path {
        color: #9aa6ac;
      }
    }
    &.active {
      svg {
        path {
          color: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;

const Nav = () => (
  //   const [active, setActive] = useState();

  <Navigation>
    <NavLink
      to="/dashboard/dashboardSection"
      style={({ isActive }) =>
        isActive
          ? {
              color: "#287154",
              background: "#F0FAF6",
              fontWeight: "bold",
            }
          : { color: "#252C32" }
      }
    >
      <HomeIcon />
      Dashboard
    </NavLink>

    <NavLink
      to="/dashboard/messagesSection"
      style={({ isActive }) =>
        isActive
          ? {
              color: "#287154",
              background: "#F0FAF6",
              fontWeight: "bold",
            }
          : { color: "#252C32" }
      }
    >
      <ChatIcon />
      Wiadomości
    </NavLink>

    <NavLink
      to="/dashboard/animalCardsSection"
      style={({ isActive }) =>
        isActive
          ? {
              color: "#287154",
              background: "#F0FAF6",
              fontWeight: "bold",
            }
          : { color: "#252C32" }
      }
    >
      <SmileIcon />
      Karty Zwierząt
    </NavLink>

    <NavLink
      to="/dashboard/volunteeringSection"
      style={({ isActive }) =>
        isActive
          ? {
              color: "#287154",
              background: "#F0FAF6",
              fontWeight: "bold",
            }
          : { color: "#252C32" }
      }
    >
      <HeartIcon />
      Wolontariat
    </NavLink>

    <Outlet />
  </Navigation>
);
export default Nav;
