import React from "react";
import { Navigate } from "react-router-dom";

interface ChildrenProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ChildrenProps> = ({ children }) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/auth/LoginForm" />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
