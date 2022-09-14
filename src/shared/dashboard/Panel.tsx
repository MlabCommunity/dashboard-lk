import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { Routes } from "services/Routes";
import { ReactComponent as IconNotification } from "assets/dashboard/IconNotification.svg";
import { ReactComponent as Burger } from "assets/dashboard/Burger.svg";
import { SubmitButton } from "shared/loginRegister";
import PlusIcon from "assets/dashboard/PlusIcon.png";

const PanelTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colorsBlackandWhite.white};
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.02), 0px 8px 4px rgba(0, 0, 0, 0.02),
    0px 12px 1px rgba(0, 0, 0, 0.01);

  div {
    display: flex;
    align-items: center;
    .notification {
      margin-right: 2rem;
    }
    .burger-btn {
      background: none;
      border: none;
      padding: 1rem;
      border-radius: 0.4rem;
      transition: background 0.3s;
      &:active {
        background: lightgray;
      }
    }
    .new-card-btn {
      img {
        margin-right: 1.3rem;
      }
    }
  }
  .title {
    ${({ theme }) => theme.heading20Semi}
    color: ${({ theme }) => theme.colorsGray.darkGray2};
    .dash-card {
      color: ${({ theme }) => theme.colorsGray.midGray4};
    }
  }
  @media (min-width: 768px) {
    padding: 1.2rem 3.2rem;
    div {
      .notification {
        margin-right: 0rem;
      }
      .burger-btn {
        display: none;
      }
    }
  }
`;

const NewCardButton = styled(SubmitButton)`
  ${({ theme }) => theme.buttonLarge};
  width: unset;
  margin: 0;
  @media (min-width: 768px) {
    margin-left: 4rem;
  }
`;

interface IToggleProps {
  toggleNav: () => void;
}

export const Panel = ({ toggleNav }: IToggleProps) => {
  const location = window.location.pathname;
  const navigate = useNavigate();

  const match = useMatch({
    path: location,
    end: true,
    caseSensitive: true,
  });

  const title = () => {
    if (match?.pathname === Routes.dashboard.path) {
      return <p className="title">Dashboard</p>;
    }
    if (match?.pathname === Routes.messages.path) {
      return <p className="title">Wiadomości</p>;
    }
    if (match?.pathname === Routes.animalCards.path) {
      return <p className="title">Karty zwierząt</p>;
    }
    if (match?.pathname === Routes.addAnimalCard.path) {
      return (
        <p className="title">
          <span className="dash-card">Karty Zwierząt / </span>
          Nowa Karta
        </p>
      );
    }
    if (match?.pathname === Routes.volunteering.path) {
      return <p className="title">Wolontariat</p>;
    }
    if (match?.pathname === Routes.accountSettings.path) {
      return <p className="title">Ustawienia konta</p>;
    }
    if (match?.pathname === Routes.organization.path) {
      return <p className="title">Pracownicy</p>;
    }
    if (match?.pathname === Routes.addEmployee.path) {
      return (
        <p className="title">
          <span className="dash-card">Pracownicy / </span>
          Nowa Karta
        </p>
      );
    }
    return null;
  };

  return (
    <PanelTop>
      {title()}
      {/* <p className="title">{title()}</p> */}
      <div>
        <IconNotification className="notification" />
        {match?.pathname === Routes.animalCards.path && (
          <NewCardButton
            className="new-card-btn"
            name="next"
            type="button"
            onClick={() => navigate("/addAnimal")}
          >
            <img src={PlusIcon} alt="" /> Nowa karta
          </NewCardButton>
        )}
        {match?.pathname === Routes.addAnimalCard.path && (
          <NewCardButton
            name="prev"
            type="button"
            onClick={() => navigate("/animalCardsSection")}
          >
            Anuluj
          </NewCardButton>
        )}
        {match?.pathname === Routes.organization.path && (
          <NewCardButton
            className="new-card-btn"
            name="next"
            type="button"
            onClick={() => navigate("/addEmployee")}
          >
            <img src={PlusIcon} alt="" /> Dodaj Pracownika
          </NewCardButton>
        )}
        {match?.pathname === Routes.addEmployee.path && (
          <NewCardButton
            name="prev"
            type="button"
            onClick={() => navigate("/organizationSection")}
          >
            Anuluj
          </NewCardButton>
        )}
        {match?.pathname === Routes.accountSettings.path && (
          <NewCardButton
            name="prev"
            type="button"
            onClick={() => navigate("/organizationSection")}
          >
            Anuluj
          </NewCardButton>
        )}
        <button className="burger-btn" type="button" onClick={toggleNav}>
          <Burger />
        </button>
      </div>
    </PanelTop>
  );
};
