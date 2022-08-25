import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import SectionLayout from "shared/dashboard/SectionLayout";
import { CardLayout } from "shared/dashboard/CardLayout";
import CalendarIcon from "assets/dashboard/CalendarIcon.png";
import ArrowDown from "assets/dashboard/ArrowDown.svg";
import { ReturnLink } from "shared/loginRegister/ReturnLink";
import {
  DropDownListContainer,
  Option,
  DropDown,
  DropDownHeader,
  SelectDateCard,
} from "shared/dashboard/Dropdown";
import { ReactComponent as StatusIcon } from "assets/dashboard/Status.svg";
import { StatisticsWrapper } from "./StatisticCardWrapper";
import StatisticCards from "./StatisticsCards";
import { VolunteeringStatus } from "./VolunteeringWrapper";

const Card = styled(CardLayout)`
  display: flex;
  flex-direction: column;
  &.chart,
  &.volunteering {
    margin: 1.6rem 0;
    height: 35.1rem;
  }
  &.chart {
    width: 84.8rem;
  }
  &.volunteering {
    width: 27.2rem;
  }
  &.animalCards,
  &.popular {
    height: 36rem;
  }
  &.animalCards {
    width: 75.2rem;
  }
  &.popular {
    width: 36.8rem;
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

const options = ["Tydzień", "Miesiąc", "Rok"];

const DashboardSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("Rok");
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggling = () => setIsOpen(!isOpen);

  const onBlur = (event: any) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
  };
  // const handleChecked = (event: ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(event.target.checked);

  //   // console.log(event.target.checked);
  //   // console.log(isChecked);
  // };

  return (
    <SectionLayout>
      <StatisticsWrapper>
        <StatisticCards />
      </StatisticsWrapper>
      <StatisticsWrapper>
        <Card className="chart">
          <div className="titleDouble">
            <p>Liczba wyświetleń podopiecznych</p>
            <SelectDateCard>
              <img src={CalendarIcon} alt="" />
              <DropDownListContainer className={`${isOpen && "active"}`}>
                <DropDownHeader onClick={toggling}>
                  {selectedOption || "Rok"}
                  <img src={ArrowDown} alt="" />
                </DropDownHeader>
                {isOpen && (
                  <DropDown>
                    {options.map((option) => (
                      <Option
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                        onBlur={isOpen && onBlur}
                        // tabIndex="0"
                        // ref={focusElement}
                      >
                        <input
                          type="radio"
                          checked={selectedOption === option}
                          id={option}
                          onChange={(e) => console.log(e)}
                        />
                        {option}
                      </Option>
                    ))}
                  </DropDown>
                )}
              </DropDownListContainer>
            </SelectDateCard>
          </div>
          <div>CHART</div>
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
      </StatisticsWrapper>
      <StatisticsWrapper>
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
    </SectionLayout>
  );
};
export default DashboardSection;
