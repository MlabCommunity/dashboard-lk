import { useState } from "react";

export type FieldType = "text" | "password";

export const useTogglePasswordVisibility = () => {
  const [passwordType, setPasswordType] = useState<FieldType>("password");

  const handlePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return [passwordType, handlePasswordVisibility] as const;
};
