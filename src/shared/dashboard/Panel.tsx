import styled from "styled-components";
import { ReactComponent as IconNotification } from "assets/dashboard/IconNotification.svg";
import { useMatch } from "react-router-dom";
import { Routes } from "services/Routes";

const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 3.2rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.02), 0px 8px 4px rgba(0, 0, 0, 0.02),
    0px 12px 1px rgba(0, 0, 0, 0.01);
  .title {
    font-weight: 600;
    font-size: 2rem;
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    line-height: 2.6rem;
    letter-spacing: -0.01em;
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
      <IconNotification />
    </PanelTop>
  );
};

export default Panel;
