import styled from "styled-components";

import { DropDownListContainer, DropDownButton } from "../DropDown";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 15;
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
    a {
      padding: 0.2rem 0;
      ${({ theme }) => theme.text14Medium};
      color: ${({ theme }) => theme.colorsGray.darkGray1};
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

export const DropDownContainer = styled(DropDownListContainer)`
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

export const DropDownNavButton = styled(DropDownButton)`
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

export const LogoutButton = styled("input")`
  padding: 0.2rem 0;
  border: none;
  background: none;
  ${({ theme }) => theme.text14Medium};
  color: ${({ theme }) => theme.colorsGray.darkGray1};
  cursor: pointer;
`;
