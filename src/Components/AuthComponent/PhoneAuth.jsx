import React, { Component, Fragment } from "react";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
class PhoneAuth extends Component {
  state = {
    phone: "",
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    try {
      e.preventDefault();
      let captchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone, captchaVerifier)
        .then(confirmationResult => {
          let otp = window.prompt("please enter valid OTP");
          confirmationResult
            .confirm(otp)
            .then(result => {
              toast.success(`successfully ${this.state.phone} logged in`);
              this.props.history.push("/");
              console.log(result.user);
            })
            .catch(err => toast.error(err.message));
        })
        .catch(err => {
          toast.error(err.message);
        });
    } catch (err) {}
  };
  render() {
    return (
      <Fragment>
        <section id="authSection" className="col-md-4 mx-auto my-2 card">
          <article className="card-body">
            <h1>enter phone number</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  placeholder="enter valid phone number"
                />
              </div>
              <div id="recaptcha-container"></div>
              <div className="form-group">
                <button>next</button>
              </div>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}

export default PhoneAuth;
