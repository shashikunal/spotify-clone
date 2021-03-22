import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { withRouter, Link } from "react-router-dom";
import firebase from "../../firebase";
class PasswordReset extends Component {
  state = {
    email: "",
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    let { email } = this.state;
    try {
      e.preventDefault();
      await firebase.auth().sendPasswordResetEmail(email);
      toast.success(
        `reset password has been sent to  ${email} please reset password`
      );
      this.props.history.push("/signin");
    } catch (err) {
      toast.error(err.message);
      this.props.history.push("/password-reset");
    }
  };

  render() {
    let { email } = this.state;
    return (
      <Fragment>
        <section id="authSection" className="col-md-4 mx-auto my-2 card">
          <article className="card-body">
            <h1 className="text-center">Password Reset</h1>
            <p>
              Enter your Spotify username, or the email address that you used to
              register. We'll send you an email with your username and a link to
              reset your password.
            </p>
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
                <button>Reset Password </button>
              </div>
              <div className="form-group">
                <Link to="/signin">Login</Link>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(PasswordReset);
