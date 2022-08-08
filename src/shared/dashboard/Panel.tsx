import styled from "styled-components";

const PanelTop = styled.div`
  width: 100%;
  .title {
    font-size: 3rem;
  }
`;

interface TitleProp {
  title: string;
}

const Panel = ({ title }: TitleProp) => (
  <PanelTop>
    <p className="title">{title}</p>
  </PanelTop>
);

export default Panel;
