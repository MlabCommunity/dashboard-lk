import { useRef, useState } from "react";
import { Routes } from "services/Routes";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "api/axios";

import { ReactComponent as OrganizationIcon } from "assets/dashboard/Organization.svg";
import Logo from "assets/dashboard/Logo.png";
import UserLogo from "assets/dashboard/UserLogo.png";
import { ReactComponent as ArrowDown } from "assets/dashboard/ArrowDown.svg";
import { useHandleLogout } from "services/HandleLogout";
import { ReactComponent as Close } from "assets/dashboard/Close.svg";
import { DropDownList, Option } from "shared/dashboard/DropDown";
import { useClickOutside } from "hooks/useClickOutside";
import { SideBarLink } from "./SideBarLink";
import {
  Navigation,
  DropDownNavButton,
  DropDownContainer,
  LogoutButton,
} from "./NavComponents";
import { LinkData } from "./LinkData";

interface IsHiddenProp {
  isHidden: boolean;
  toggleNav: () => void;
}

const OrganizationUrl = "http://lappka.mobitouch.pl/pet/shelters";

export const Nav = ({ isHidden, toggleNav }: IsHiddenProp) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organizationName, setOrganizationName] = useState("");

  const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: containerRef,
    refButton: buttonRef,
    handler: toggleOpen,
  });

  // eslint-disable-next-line no-unused-vars
  const { isLoading, data, isFetching } = useQuery(
    ["OrganizationData"],
    async () => {
      try {
        const response = await axiosInstance(OrganizationUrl);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setOrganizationName(response.data.organizationName);
      } catch (error) {
        console.log(error);
      }
    }
  );

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
            {firstName} {lastName}{" "}
            <ArrowDown className={`${isOpen && "active"}`} />
          </p>

          <p className="organization-name">{organizationName}</p>
          {isOpen && (
            <DropDownContainer ref={containerRef}>
              <DropDownList>
                <Option>
                  <Link to="/accountSettings">Ustawienia konta</Link>
                </Option>
                <Option>
                  <LogoutButton
                    type="button"
                    onClick={useHandleLogout}
                    value="Wyloguj się"
                  />
                </Option>
              </DropDownList>
            </DropDownContainer>
          )}
        </DropDownNavButton>
      </div>
    </Navigation>
  );
};
