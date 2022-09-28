import styled from "styled-components";
import { OrganizationSettings } from "./OrganizationSettings";
import { UserSettings } from "./UserSettings";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colorsGray.lightGray5};
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const AccountSettings = () => (
  <Layout>
    <OrganizationSettings />
    <UserSettings />
  </Layout>
);
