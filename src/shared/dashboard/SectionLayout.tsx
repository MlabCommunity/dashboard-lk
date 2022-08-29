import { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding: 2.4rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colorsGray.lightGray5};
`;

const SectionLayout = ({ children }: PropsWithChildren) => (
  <Layout>{children}</Layout>
);

export default SectionLayout;
