import { useState } from "react";

import styled from "styled-components";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import { InputContainer } from "shared/InputContainer";
import { Input } from "../../shared/Input";

const Wrapper = styled.div`
  div:first-child {
    margin-top: 1.9rem;
  }
  .eye {
    margin-left: auto;
  }
  p.error {
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
  }
  .disabledError {
    visibility: hidden;
  }
`;
interface Props {
  onEnteredData: Function;
}

const Inputs = ({ onEnteredData }: Props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };
  const onErrorHandler = () => {
    setIsError(false);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };
  const enteredData = {
    email: enteredEmail,
    password: enteredPassword,
  };
  onEnteredData(enteredData);

  return (
    <Wrapper>
      <InputContainer focused={isFocused} error={isError}>
        <img src={PersonLogo} alt="" />
        <Input
          className={`${isError && "error"}`}
          type="email"
          placeholder="Your Email"
          error={isError}
          value={enteredEmail}
          onFocus={onFocusHandler}
          onClick={onErrorHandler}
          onChange={emailChangeHandler}
        />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Niepoprawny email
      </p>
      <InputContainer focused={isFocused} error={isError}>
        <img src={PasswordLogo} alt="" />
        <Input
          type="password"
          placeholder="Password"
          error={isError}
          value={enteredPassword}
          onFocus={onFocusHandler}
          onChange={passwordChangeHandler}
        />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Niepoprawne hasło
      </p>
    </Wrapper>
  );
};

export default Inputs;
