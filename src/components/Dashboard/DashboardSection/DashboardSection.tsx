import styled from "styled-components";
import { Link } from "react-router-dom";
import SectionLayout from "shared/dashboard/SectionLayout";
import { CardLayout } from "shared/dashboard/CardLayout";
import CalendarIcon from "assets/dashboard/CalendarIcon.png";
import { ReturnLink } from "shared/loginRegister/ReturnLink";
import {
  SelectDateCard,
  Dropdown,
  OptionType,
} from "shared/dashboard/DropDown";
import { ReactComponent as StatusIcon } from "assets/dashboard/Status.svg";
import { StatisticsWrapper } from "./StatisticCardWrapper";
import StatisticCards from "./StatisticsCards";
import { VolunteeringStatus } from "./VolunteeringWrapper";
import AnimalCards from "./LatestAnimalCard";

import { Chart } from "./Chart";

const Card = styled(CardLayout)`
  display: flex;
  flex-direction: column;
  &.chart,
  &.volunteering,
  &.popular {
    height: 35.6rem;
  }
  &.chart {
    width: 100%;
    max-width: 84.8rem;
    order: 1;
    @media (min-width: 992px) {
      width: 75%;
    }
  }
  &.volunteering {
    flex: 1;
    min-width: 16rem;
    max-width: 27.2rem;
    order: 4;
    @media (min-width: 992px) {
      flex: 1;
      order: 2;
    }
  }
  &.animalCards {
    width: 100%;
    max-width: 75.2rem;
    order: 2;
    @media (min-width: 768px) {
      max-height: 35.6rem;
    }
    @media (min-width: 992px) {
      flex: 2;
      order: 3;
    }
  }
  &.popular {
    flex: 2;
    max-width: 36.8rem;
    order: 3;
    @media (min-width: 992px) {
      flex: 1;
      order: 4;
    }
  }
  .titleDouble {
    padding: 0.8rem 1.6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
    p {
      ${({ theme }) => theme.text16Semi}
    }
  }
  .titleOnly {
    width: 100%;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colorsGray.lightGray3};
    p {
      ${({ theme }) => theme.heading18Semi}
    }
  }
`;

const options: OptionType[] = [
  { id: "Tydzień", name: "Tydzień" },
  { id: "Miesiąc", name: "Miesiąc" },
  { id: "Rok", name: "Rok" },
];

const DashboardSection = () => {
  const handleChange = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };
  return (
    <SectionLayout>
      <StatisticsWrapper>
        <StatisticCards />
        <Card className="chart">
          <div className="titleDouble">
            <p>Liczba wyświetleń podopiecznych</p>
            <SelectDateCard>
              <img src={CalendarIcon} alt="" />
              <Dropdown options={options} onChange={handleChange} />
            </SelectDateCard>
          </div>
          <Chart />
        </Card>
        <Card className="volunteering">
          <div className="titleOnly">
            <p>Wolontariat</p>
          </div>
          <VolunteeringStatus>
            <p>Wpłać darowiznę</p>
            <div>
              <StatusIcon />
              <span>Włączone</span>
            </div>
          </VolunteeringStatus>
          <VolunteeringStatus>
            <p>Codzienna pomoc</p>
            <div>
              <StatusIcon />
              <span>Wyłączone</span>
            </div>
          </VolunteeringStatus>
          <VolunteeringStatus>
            <p>Wyprowadzanie psów</p>
            <div>
              <StatusIcon />
              <span>Włączone</span>
            </div>
          </VolunteeringStatus>
        </Card>
        <Card className="animalCards">
          <div className="titleDouble">
            <p>Najnowsze karty zwierząt</p>
            <ReturnLink>
              <Link to="/animalCardsSection">Wszystkie</Link>
            </ReturnLink>
          </div>
          <AnimalCards />
        </Card>
        <Card className="popular">
          <div className="titleOnly">
            <p>Najpopularniejsze</p>
          </div>
        </Card>
      </StatisticsWrapper>
    </SectionLayout>
  );
};
export default DashboardSection;
