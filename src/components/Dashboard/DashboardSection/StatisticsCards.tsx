import styled from "styled-components";
import { useEffect, useState } from "react";
import { Loader } from "shared/dashboard/Loader";
import { CardLayout } from "shared/dashboard";

import IconCard from "assets/dashboard/IconCard.png";
import IconPerson from "assets/dashboard/IconPerson.png";
import IconZoom from "assets/dashboard/IconZoom.png";
import axios from "axios";

export const StatisticsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

const StatisticCard = styled(CardLayout)`
  position: relative;
  padding: 1.6rem;
  width: 27.2rem;
  height: 8.2rem;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 1.2rem;
    p {
      ${({ theme }) => theme.text12Semi}
      color: ${({ theme }) => theme.colorsGray.midGray4};
    }
    span {
      ${({ theme }) => theme.heading30Semi}
      color: ${({ theme }) => theme.colorsGray.darkGray2};
    }
  }
  @media (min-width: 992px) {
    flex: 1;
    div {
      justify-content: center;
    }
  }
`;

const url = "http://lappka.mobitouch.pl/pet/shelters/stats";

export const StatisticCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [cardsTotal, setCardsTotal] = useState();
  const [adoptedCount, setAdoptedCount] = useState();
  const [toAdoptCount, setToAdoptCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios(url);
        setCardsTotal(response.data.cardCount);
        setAdoptedCount(response.data.adoptedCount);
        setToAdoptCount(response.data.toAdoptCount);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [setAdoptedCount, setAdoptedCount, setToAdoptCount]);

  const cardData = [
    {
      id: 1,
      icon: IconCard,
      title: "Karty zwierząt",
      stat: cardsTotal,
    },
    {
      id: 2,
      icon: IconZoom,
      title: "Szuka Właściciela",
      stat: toAdoptCount,
    },
    {
      id: 3,
      icon: IconPerson,
      title: "Z właścicielem",
      stat: adoptedCount,
    },
  ];

  return (
    <>
      {cardData.map((card) => (
        <StatisticCard key={card.id}>
          <img src={card.icon} alt="" />
          <div>
            <p>{card.title}</p>
            <span>{card.stat}</span>
            {isError && <p>Coś poszło nie tak..</p>}
          </div>
          {isLoading && <Loader />}
        </StatisticCard>
      ))}
    </>
  );
};
