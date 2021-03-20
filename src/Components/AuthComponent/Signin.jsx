import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    let { email, password } = this.state;
    let { history, match, location } = this.props;
    e.preventDefault();
    try {
      var userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified === true) {
        toast.success(`successfully ${email} logged in...`);
        history.push("/");
      } else {
        toast.error(`${email} is not yet verified...`);
        //redirect to login
        history.push("/signin");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  render() {
    let { email, password } = this.state;
    return (
      <Fragment>
        <section id="authSection" className="col-md-4 mx-auto my-2 card">
          <article className="card-body">
            <h4>To continue, log in to Spotify.</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address or username</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email address or username"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="password"
                />
              </div>

              <p>
                <a href="/">Forgot a password</a>
              </p>

              <div className="form-group">
                <input type="checkbox" name="" id="" /> remember me
                <button>Login </button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(SignIn);
