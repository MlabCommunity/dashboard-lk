import styled from "styled-components";
import { IChildren } from "types/IChildren";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colorsGray.lightGray5};
  height: 100%;
  padding: 2.4rem;
`;

const SectionLayout = ({ children }: IChildren) => <Layout>{children}</Layout>;

export default SectionLayout;
