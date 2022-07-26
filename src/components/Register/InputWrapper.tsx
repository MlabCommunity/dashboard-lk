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
`;

const Inputs = () => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  return (
    <Wrapper>
      <InputContainer focused={isFocused}>
        <img src={PersonLogo} alt="" />
        <Input
          type="text"
          placeholder="Imię i Nazwisko"
          onFocus={onFocusHandler}
        />
      </InputContainer>
      <InputContainer focused={isFocused}>
        <img src={Envelope} alt="" />
        <Input type="email" placeholder="Twój email" />
      </InputContainer>
      <InputContainer focused={isFocused}>
        <img src={PasswordLogo} alt="" />
        <Input type="password" placeholder="Hasło" onFocus={onFocusHandler} />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
      <InputContainer focused={isFocused}>
        <img src={PasswordLogo} alt="" />
        <Input
          type="password"
          placeholder="Powtórz hasło"
          onFocus={onFocusHandler}
        />
        <img className="eye" src={EyeIcon} alt="" />
      </InputContainer>
    </Wrapper>
  );
};

export default Inputs;
