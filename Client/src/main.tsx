import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { PortfolioContextProvider } from "./context/portfolioContext";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <PortfolioContextProvider>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>
);
