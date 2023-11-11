import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GitHubProvider } from "./context/context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
// secreT2@

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-f475rxp6jbomeegs.us.auth0.com"
    clientId="54Fml4AfXtmcK64bQMoyBbxKfQvA3stw"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </Auth0Provider>
);
