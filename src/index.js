import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppPage from "./AppPage";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppPage />
  </StrictMode>,
  rootElement
);