import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>({
  ref,
  refButton,
  handler,
}: {
  ref: RefObject<T>;
  refButton: RefObject<HTMLButtonElement>;
  handler: () => void;
}) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !refButton.current ||
        refButton.current.contains(event.target as Node) ||
        !ref.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  });
};
