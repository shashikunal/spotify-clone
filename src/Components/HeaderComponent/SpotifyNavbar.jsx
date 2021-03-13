import React, { Fragment } from "react";
import SpotifyLogo from "./LogoComponent/SpotifyLogo";
import SpotifyMenus from "./MenuComponent/SpotifyMenus";
import "./Spotify-navbar.css";
const SpotifyNavbar = () => {
  return (
    <Fragment>
      <section id="spotifyNavbarBlock">
        <article>
          <div className="logoBlock">
            <a href="/">
              <SpotifyLogo />
            </a>
          </div>
          <div className="menuBlock">
            <SpotifyMenus />
          </div>
        </article>
      </section>
    </Fragment>
  );
};

export default SpotifyNavbar;
