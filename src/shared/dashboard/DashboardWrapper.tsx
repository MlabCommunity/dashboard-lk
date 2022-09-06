import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100vw;
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    min-height: 93.1rem;
    max-width: 144rem;
  }
`;

interface IChildrenProps {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: IChildrenProps) => (
  <StyledWrapper>{children}</StyledWrapper>
);

export default DashboardWrapper;
