import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./Auth/auth0-provider-with-history";
import App from "./App";
import PlayerState from "./Context/PlayerState";

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <PlayerState>
        <App />
      </PlayerState>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
