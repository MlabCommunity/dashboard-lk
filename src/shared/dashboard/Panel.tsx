import styled from "styled-components";
import { useMatch } from "react-router-dom";
import { Routes } from "services/Routes";
import { ReactComponent as IconNotification } from "assets/dashboard/IconNotification.svg";
import { ReactComponent as Burger } from "assets/dashboard/Burger.svg";

const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3.2rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.02), 0px 8px 4px rgba(0, 0, 0, 0.02),
    0px 12px 1px rgba(0, 0, 0, 0.01);

  div {
    display: flex;
    align-items: center;
    .notification {
      margin-right: 2rem;
    }
    button {
      background: none;
      border: none;
    }
  }
  .title {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    line-height: 2.6rem;
    letter-spacing: -0.01em;
  }
  @media (min-width: 768px) {
    div {
      .notification {
        margin-right: 0;
      }
      button {
        display: none;
      }
    }
  }
`;

const Panel = () => {
  const location = window.location.pathname;

  const match = useMatch({
    path: location,
    end: true,
    caseSensitive: true,
  });

  const title = () => {
    if (match?.pathname === Routes.dashboard.path) {
      return "Dashboard";
    }
    if (match?.pathname === Routes.messages.path) {
      return "Wiadomości";
    }
    if (match?.pathname === Routes.animalCards.path) {
      return "Karty Zwierząt";
    }
    return "Wolontariat";
  };

  return (
    <PanelTop>
      <p className="title">{title()}</p>
      <div>
        <IconNotification className="notification" />
        <button type="button">
          <Burger />
        </button>
      </div>
    </PanelTop>
  );
};

export default Panel;
