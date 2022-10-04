import styled from "styled-components";
import { SubmitButton } from "shared/loginRegister";
import { useState } from "react";

const PreviewWrapper = styled("div")`
  width: 50rem;
  height: 50rem;
  background: red;
`;
const Image = styled("img")`
  width: 5rem;
  height: 5rem;
`;
const Controls = styled("div")`
  width: 5rem;
  height: 5rem;
`;

export const Preview = ({ onHidePreview, imageSrc }: any) => {
  const [closePreview, setClosePreview] = useState(false);
  const handleClosePreview = () => {
    setClosePreview(!closePreview);
    onHidePreview(closePreview);
  };
  return (
    <PreviewWrapper>
      <Image src={imageSrc} alt="" />
      <Controls>
        <SubmitButton name="next" type="button" onClick={handleClosePreview}>
          Zamknij
        </SubmitButton>
      </Controls>
    </PreviewWrapper>
  );
};
