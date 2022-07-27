import { useState } from "react";

import styled from "styled-components";
import PersonLogo from "assets/Vector.png";
import PasswordLogo from "assets/password.png";
import EyeIcon from "assets/ic_eye.png";
import Envelope from "assets/envelope.png";
import { InputContainer } from "shared/InputContainer";
import { Input } from "../../shared/Input";

const Wrapper = styled.div`
  .eye {
    margin-left: auto;
  }
  .error {
    color: #db524e;
    text-align: left;
    padding-left: 0.4rem;
  }
  .disabledError {
    visibility: hidden;
  }
`;

const Inputs = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };
  const onErrorHandler = () => {
    setIsError(true);
  };

  return (
    <Wrapper>
      <InputContainer focused={isFocused} error={isError}>
        <img src={PersonLogo} alt="" />
        <Input
          type="text"
          placeholder="Imię i Nazwisko"
          onFocus={onFocusHandler}
          onClick={onErrorHandler}
          error={isError}
        />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Wprowadź poprawne dane
      </p>
      <InputContainer focused={isFocused} error={isError}>
        <img src={Envelope} alt="" />
        <Input type="email" placeholder="Twój email" error={isError} />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Nieprawidłowy email
      </p>
      <InputContainer focused={isFocused} error={isError}>
        <img src={PasswordLogo} alt="" />
        <Input
          type="password"
          placeholder="Hasło"
          onFocus={onFocusHandler}
          error={isError}
          min="6"
        />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Wymagane: min. 6 znaków, A-z, 0-9, znak specjalny.
      </p>
      <InputContainer focused={isFocused} error={isError}>
        <img src={PasswordLogo} alt="" />
        <Input
          type="password"
          placeholder="Powtórz hasło"
          onFocus={onFocusHandler}
          error={isError}
        />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <p className={`${isError ? "error" : "disabledError"}`}>
        Hasła muszą być takie same
      </p>
    </Wrapper>
  );
};

export default Inputs;
