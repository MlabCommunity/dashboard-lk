import { SectionLayout } from "shared/dashboard";
import {
  StatisticCards,
  StatisticsWrapper,
} from "../DashboardSection/StatisticsCards";

export const AnimalCardsSection = () => (
  <SectionLayout>
    <StatisticsWrapper>
      <StatisticCards />
    </StatisticsWrapper>
  </SectionLayout>
);
