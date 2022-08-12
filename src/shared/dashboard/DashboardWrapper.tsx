import { IChildren } from "types/IChildren";
import styled from "styled-components";

const StyledWrapper = styled.div`
  .panel {
    background-color: #fff;
  }
  .nav {
    background-color: green;
  }
  /* .main {
    background-color: #f6f6f6;
  } */
`;

const DashboardWrapper = ({ children }: IChildren) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default DashboardWrapper;
