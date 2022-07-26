import { ReactNode } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  padding: 3rem 0 0;
  margin: 0 auto;
  width: 95%;
  max-width: 34.4rem;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #77838f;

  .checkbox-section {
    display: flex;
    justify-content: space-between;
    mix-blend-mode: normal;
    opacity: 0.75;
    div {
      display: flex;
      p {
        padding-left: 0.5rem;
      }
    }
    a {
      text-decoration: none;
      color: #77838f;
    }
  }
`;

type Props = {
  children: ReactNode;
};

const LayoutForm = ({ children }: Props) => (
  <FormContainer>{children}</FormContainer>
);

export default LayoutForm;
