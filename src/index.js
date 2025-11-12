import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { GameSettingsProvider } from "./context/GameSettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GameSettingsProvider>
    <App />
  </GameSettingsProvider>);
