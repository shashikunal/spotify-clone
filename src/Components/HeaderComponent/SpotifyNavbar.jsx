import React, { Component, Fragment } from "react";
import SpotifyLogo from "./LogoComponent/SpotifyLogo";
import firebase from "../../firebase";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./Spotify-navbar.css";
class SpotifyNavbar extends Component {
  signOut = _ => {
    firebase
      .auth()
      .signOut()
      .then(_ => {
        toast.success("successfully logged out from this app");
        this.props.history.push("/signin");
      })
      .catch(err => toast.error(err.message));
  };

  render() {
    let IsAnonymousUser = () => (
      <Fragment>
        <li>
          <Link to="/signup"> Signup</Link>
        </li>
        <li>
          <Link to="/signin"> Login</Link>
        </li>
      </Fragment>
    );
    let IsAuthenticatedUser = () => (
      <li>
        <button className="btn btn-primary" onClick={this.signOut}>
          Logout
        </button>
      </li>
    );

    return (
      <Fragment>
        <section id="spotifyNavbarBlock">
          <article>
            <div className="logoBlock">
              <Link to="/">
                <SpotifyLogo />
              </Link>
            </div>
            <div className="menuBlock">
              <Fragment>
                <nav>
                  <ul>
                    <li>
                      <Link to="/"> premium</Link>
                    </li>
                    <li>
                      <Link to="/"> Support</Link>
                    </li>
                    <li>
                      <Link to="/"> Download</Link>
                    </li>
                    {this.props.user.emailVerified === true ||
                    this.props.user.isAnonymous === false ? (
                      <IsAuthenticatedUser />
                    ) : (
                      <IsAnonymousUser />
                    )}
                  </ul>
                </nav>
              </Fragment>
            </div>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(SpotifyNavbar);
