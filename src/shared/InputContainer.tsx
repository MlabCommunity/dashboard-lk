import styled from "styled-components";

type IProps = {
  focused: boolean;
};

export const InputContainer = styled("div")(
  ({ focused }: IProps) => `
  display: flex;
  margin: 1.9rem auto;
  padding: 1.7rem;
  width: 100%;
  max-width: 34.4rem;
  height: 5.6rem;
  border: 1px solid #77838f;
  background-color: #fff;
  filter: drop-shadow(-4px 4px 10px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  box-shadow: ${focused ? "0 0 15px #D9D9D9" : "none"}
`
);
