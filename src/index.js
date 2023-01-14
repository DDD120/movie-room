import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "store";
import { ToastContainer } from "react-toastify";
import { Common } from "styles/common";
import styled from "@emotion/styled";
import "react-toastify/dist/ReactToastify.css";

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${Common.colors.black};
    min-height: 40px;

    color: ${Common.colors.white};
  }
  .Toastify__close-button {
    color: ${Common.colors.white};
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <StyledContainer position="top-right" />
  </Provider>
);
