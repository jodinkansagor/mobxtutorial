import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MushroomProvider } from "./stores/MushroomContext";

ReactDOM.render(
  <React.StrictMode>
    <MushroomProvider>
      <App />
    </MushroomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

