import React, { Component, Fragment } from "react";
import Signup from "./Components/AuthComponent/Signup";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import SpotifySlider from "./Components/SliderComponent/SpotifySlider";
class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <header>
          <SpotifyNavbar />
        </header>
        <main>
          {/* <SpotifySlider /> */}
          <Signup />
        </main>
      </Fragment>
    );
  }
}

export default App;
