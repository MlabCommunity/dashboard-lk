import { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colorsGray.lightGray5};
  height: 100%;
  padding: 2.4rem;
`;

const SectionLayout = ({ children }: PropsWithChildren) => (
  <Layout>{children}</Layout>
);

export default SectionLayout;
