import { IChildren } from "types/IChildren";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    min-height: 93rem;
    max-width: 144rem;
  }
`;

const DashboardWrapper = ({ children }: IChildren) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default DashboardWrapper;
