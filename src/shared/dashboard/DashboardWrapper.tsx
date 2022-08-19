import { IChildren } from "types/IChildren";
import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 144rem;
  @media (min-width: 768px) {
    display: flex;
    min-height: 93rem;
  }
`;

const DashboardWrapper = ({ children }: IChildren) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default DashboardWrapper;
