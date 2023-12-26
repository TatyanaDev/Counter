import { StrictMode } from "react";
import { render } from "react-dom";
import "./reset.module.scss";
import "./index.module.scss";
import App from "./App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
