import React, { Component, Fragment } from "react";
import Signup from "./Components/AuthComponent/Signup";
import SpotifyNavbar from "./Components/HeaderComponent/SpotifyNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/HomeComponent/Home";
import SignIn from "./Components/AuthComponent/Signin";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";
class App extends Component {
  state = {
    userInfo: "",
  };

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ userInfo: user });
      } else {
        this.setState({ userInfo: "" });
      }
    });
  }

  render() {
    console.log(this.state.userInfo);
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavbar user={this.state.userInfo} />
          </header>
          <ToastContainer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/password-reset" exact component={PasswordReset} />
            <Route path="/phone-auth" exact component={PhoneAuth} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
