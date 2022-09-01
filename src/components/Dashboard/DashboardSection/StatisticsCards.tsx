import styled from "styled-components";
import { CardLayout } from "shared/dashboard/CardLayout";

import IconCard from "assets/dashboard/IconCard.png";
import IconHeart from "assets/dashboard/IconHeart.png";
import IconPerson from "assets/dashboard/IconPerson.png";
import IconZoom from "assets/dashboard/IconZoom.png";

const StatisticCard = styled(CardLayout)`
  padding: 1.6rem;
  width: 27.2rem;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  /* @media (min-width: 992px) {
    width: 25rem;
  } */
`;

const StatisticCards = () => (
  <>
    <StatisticCard>
      <img src={IconCard} alt="" />
      <div>
        <p>Karty zwierząt</p>
        <span>235</span>
      </div>
    </StatisticCard>
    <StatisticCard>
      <img src={IconZoom} alt="" />
      <div>
        <p>Szuka właściciela</p>
        <span>35</span>
      </div>
    </StatisticCard>
    <StatisticCard>
      <img src={IconPerson} alt="" />
      <div>
        <p>Z właścicielem</p>
        <span>200</span>
      </div>
    </StatisticCard>
    <StatisticCard>
      <img src={IconHeart} alt="" />
      <div>
        <p>Wolontariat (ilość osób)</p>
        <span>22</span>
      </div>
    </StatisticCard>
  </>
);

export default StatisticCards;
