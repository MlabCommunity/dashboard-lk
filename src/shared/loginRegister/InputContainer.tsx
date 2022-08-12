import styled from "styled-components";

export const InputContainer = styled("div")`
  display: flex;
  margin: 1.9rem auto 0;
  padding: 1.6rem;
  width: 100%;
  height: 4rem;
  border: 1px solid #77838f;
  background-color: #fff;
  filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  img {
    max-width: 22px;
    object-fit: contain;
  }
  .eye {
    margin-right: 0.5rem;
  }
`;
