import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GitHubProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GitHubProvider>
    <App />
  </GitHubProvider>
);
