import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      isLoggedIn: 0,

      form: {
        mobile: 0,
        otp: 0,
      },
    };

    this.handleStep = this.handleStep.bind(this);
  }

  handleStep() {
    const { step, form } = this.state;

    if (step === 2) {
        // validation
        // otp
        // api call
      this.props.changeIsLoggedIn(1)
      console.log(this.state)
    }

    this.setState({ step: 2 });
  }

  handleForm(event) {
    let { step, form } = this.state;

    if (step === 1) {
      form.mobile = event.target.value;
    } else {
      form.otp = event.target.value;
    }

    this.setState({ form });
  }
  render() {
    const { step, isLoggedIn } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <input
          placeholder={step === 1 ? "Enter Mobile Number" : "Enter OTP"}
          onChange={(event) => this.handleForm(event)}
        />
        <button onClick={this.handleStep}>
          {step === 1 ? "Next" : "Submit"}
        </button>
      </div>
    );
  }
}
