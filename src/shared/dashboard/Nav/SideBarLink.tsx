import { NavLink, NavLinkProps } from "react-router-dom";

interface SideBarLinkProps extends NavLinkProps {}

export const SideBarLink = ({ children, ...props }: SideBarLinkProps) => (
  <NavLink
    style={({ isActive }) =>
      isActive
        ? {
            color: "#287154",
            background: "#F0FAF6",
            fontWeight: "bold",
          }
        : { color: "#252C32" }
    }
    {...props}
  >
    {children}
  </NavLink>
);
