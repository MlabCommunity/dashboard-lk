import { SectionLayout } from "shared/dashboard";
import { StatisticCards } from "../DashboardSection/StatisticsCards";
import { StatisticsWrapper } from "../DashboardSection/StatisticCardWrapper";

export const AnimalCardsSection = () => (
  <SectionLayout>
    <StatisticsWrapper>
      <StatisticCards />
    </StatisticsWrapper>
  </SectionLayout>
);
