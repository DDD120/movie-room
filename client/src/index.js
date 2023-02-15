import React from "react";
import ReactDOM, { hydrateRoot } from "react-dom/client";
import "styles/index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "store";
import { ToastContainer } from "react-toastify";
import { colors } from "styles/common";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${colors.black};
    min-height: 40px;
    color: ${colors.white};
  }
  .Toastify__close-button {
    color: ${colors.white};
  }
`;

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(document.getElementById("root"));

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <HelmetProvider>
      <Provider store={store}>
        <App />
        <StyledContainer position="top-right" />
      </Provider>
    </HelmetProvider>
  );
} else {
  root.render(
    <HelmetProvider>
      <Provider store={store}>
        <App />
        <StyledContainer position="top-right" />
      </Provider>
    </HelmetProvider>
  );
}
