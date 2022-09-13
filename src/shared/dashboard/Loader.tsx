import { CSSProperties } from "styled-components";
import { PuffLoader } from "react-spinners";

const override: CSSProperties = {
  position: "absolute",
  zIndex: "10",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
};

export const Loader = () => (
  <PuffLoader color="green" cssOverride={override} speedMultiplier={1.5} />
);
