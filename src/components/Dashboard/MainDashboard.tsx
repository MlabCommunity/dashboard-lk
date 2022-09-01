import styled from "styled-components";
import DashboardWrapper from "shared/dashboard/DashboardWrapper";
import Nav from "shared/dashboard/Nav/Nav";
import Panel from "shared/dashboard/Panel";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 118.4rem;
  }
`;

const MainDashboard = () => (
  <DashboardWrapper>
    <Nav />
    <Container>
      <Panel />
      <Outlet />
    </Container>
  </DashboardWrapper>
);

export default MainDashboard;
