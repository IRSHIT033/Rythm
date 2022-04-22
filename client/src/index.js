import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth0ProviderWithHistory from "./Auth/auth0-provider-with-history";
import App from "./App";
import PlayerState from "./Context/PlayerState";
import Playlist from "./Components/SongsRelated/Playlist";

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <PlayerState>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/playlists" element={<Playlist />} />
        </Routes>
      </PlayerState>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
