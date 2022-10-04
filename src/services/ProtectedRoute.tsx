import React from "react";
import { createBrowserHistory } from "history";
import { Navigate } from "react-router-dom";

interface ChildrenProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ChildrenProps> = ({ children }) => {
  if (!localStorage.getItem("user")) {
    localStorage.clear();
    return <Navigate to="/auth/LoginForm" />;
  }

  return <>{children}</>;
};

export const history = createBrowserHistory();
