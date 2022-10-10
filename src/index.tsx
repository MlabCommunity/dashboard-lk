import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { configure } from "axios-hooks";
import axiosInstance from "api/axios";
import { history } from "services/ProtectedRoute";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

configure({ axios: axiosInstance });

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
