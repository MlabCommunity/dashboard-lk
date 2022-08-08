import { ReactNode } from "react";
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

interface WrapperProps {
  children: ReactNode;
}

const DashboardWrapper = ({ children }: WrapperProps) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default DashboardWrapper;
