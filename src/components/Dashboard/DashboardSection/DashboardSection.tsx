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

import { Chart } from "./Chart";

const Card = styled(CardLayout)`
  display: flex;
  flex-direction: column;
  &.chart,
  &.volunteering,
  &.animalCards,
  &.popular {
    height: 35.6rem;
  }
  &.chart {
    width: 100%;
    max-width: 84.8rem;
    order: 1;
  }
  &.volunteering {
    width: 27rem;
    order: 4;
    @media (min-width: 1200px) {
      order: 2;
    }
  }
  /* &.animalCards,
  &.popular {
    height: 36.1rem;
  } */
  &.animalCards {
    order: 2;
    width: 100%;
    max-width: 75.2rem;
    @media (min-width: 1200px) {
      order: 3;
    }
  }
  &.popular {
    order: 3;
    @media (min-width: 1200px) {
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
      {/* <StatisticsWrapper>
      </StatisticsWrapper> */}
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
        </Card>
        <Card className="popular">
          <div className="titleOnly">
            <p>Najpopularniejsze</p>
          </div>
        </Card>
      </StatisticsWrapper>
      {/* <StatisticsWrapper></StatisticsWrapper> */}
    </SectionLayout>
  );
};
export default DashboardSection;
