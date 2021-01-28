import React, { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import reportWebVitals from "./reportWebVitals";

import Routes from "./routes";

// Define chunk method on array
Object.defineProperty(Array.prototype, "chunk", {
  value: function (chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize))
      .fill()
      .map(function (_, i) {
        return that.slice(i * chunkSize, i * chunkSize + chunkSize);
      });
  },
});

render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
