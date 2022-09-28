import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import styled from "styled-components";
import { SubmitButton } from "shared/loginRegister";

const CroopModal = styled("div")`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;
const CrooperLayout = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.colorsPrimary.pr600};
  border-radius: 10px;
  overflow: hidden;
`;

const CroopContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 6rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;
const Controls = styled("div")`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  width: 100%;
  height: 6rem;
  bottom: 0;
  left: 50%;
  background: ${({ theme }) => theme.colorsBlackandWhite.white};
  transform: translateX(-50%);
  @media (min-width: 768px) {
    padding: 0 3.2rem;
  }
`;

const Range = styled("input")`
  color: green;
`;

export const Crooper = ({ image, handleCloseCrooper }: any) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );
  return (
    <CroopModal>
      <CrooperLayout>
        <CroopContainer>
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            cropShape="round"
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            aspect={1}
          />
        </CroopContainer>
        <Controls className="controls">
          <Range
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.05}
            aria-labelledby="Zoom"
            onChange={(e) => {
              setZoom(Number(e.target.value));
            }}
            className="zoom-range"
          />
          <div style={{ display: "flex", gap: "1.6rem" }}>
            <SubmitButton
              name="prev"
              type="button"
              onClick={handleCloseCrooper}
            >
              Anuluj
            </SubmitButton>
            <SubmitButton name="next" type="button">
              Zapisz
            </SubmitButton>
          </div>
        </Controls>
      </CrooperLayout>
    </CroopModal>
  );
};
