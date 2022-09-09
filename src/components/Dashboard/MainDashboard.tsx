import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { DashboardWrapper, Nav, Panel } from "shared/dashboard";

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 118.4rem;
  }
`;

export const MainDashboard = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <DashboardWrapper>
      <Nav toggleNav={handleHidden} isHidden={isHidden} />
      <Container>
        <Panel toggleNav={handleHidden} />
        <Outlet />
      </Container>
    </DashboardWrapper>
  );
};
