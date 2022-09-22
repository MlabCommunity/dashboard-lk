import useAxios from "axios-hooks";
import { IAnimalCardTypes } from "types/axiosApi";

export const useDogCardData = () => {
  const dogCardData = () =>
    useAxios<IAnimalCardTypes>(
      {
        url: "/pet/shelters/cards/dog",
        method: "POST",
      },
      { manual: true }
    );
  return { dogCardData };
};

export const useCatCardData = () => {
  const catCardData = () =>
    useAxios<IAnimalCardTypes>(
      {
        url: "/pet/shelters/cards/cat",
        method: "POST",
      },
      { manual: true }
    );
  return { catCardData };
};

export const useOtherCardData = () => {
  const otherCardData = () =>
    useAxios<IAnimalCardTypes>(
      {
        url: "/pet/shelters/cards/other",
        method: "POST",
      },
      { manual: true }
    );
  return { otherCardData };
};
