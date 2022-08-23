import styled from "styled-components";
import SectionLayout from "shared/dashboard/SectionLayout";
import IconCard from "assets/dashboard/IconCard.png";
import IconHeart from "assets/dashboard/IconHeart.png";
import IconPerson from "assets/dashboard/IconPerson.png";
import IconZoom from "assets/dashboard/IconZoom.png";
import { Card } from "shared/dashboard/Card";
import { StatisticsWrapper } from "./StatisticCardWrapper";

const StatisticCard = styled(Card)`
  width: 27.2rem;
  padding: 1.6rem;
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
`;

const DashboardSection = () => (
  <SectionLayout>
    <StatisticsWrapper>
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
    </StatisticsWrapper>
    <Card>
      <div>
        <p>Liczba wyświetleń podopiecznych</p>
        <div>FIlter by year</div>
      </div>
      <div>CHART</div>
    </Card>
  </SectionLayout>
);

export default DashboardSection;
