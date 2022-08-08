// import { IChildren } from "types/IChildren";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = styled.nav`
  width: 95vw;
  background-color: ${({ theme }) => theme.colors.green};
  ul {
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

const Nav = () => (
  <Navigation>
    <ul>
      <li>
        <NavLink to="/dashboard/dashboardSection">dashboardSection</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/messagesSection">messagesSection</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/animalCardsSection">animalCardsSection</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/volunteeringSection">
          volunteeringSection
        </NavLink>
      </li>
    </ul>
    <Outlet />
  </Navigation>
);

export default Nav;
