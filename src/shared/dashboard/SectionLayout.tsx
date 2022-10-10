import { PropsWithChildren } from "react";
import styled from "styled-components";

const Layout = styled.div`
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colorsGray.lightGray5};
`;

export const SectionLayout = ({ children }: PropsWithChildren) => (
  <Layout>{children}</Layout>
);
