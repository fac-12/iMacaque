import React, { Component } from "react";
import { browserHistory } from "react-router";
import HomeButton from "../Home_button";
import "./Static.css";
class BinaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monkeyId: "" };
  }

  handleChange = event => {
    this.setState({ monkeyId: event.target.value });
  };

  handleSubmit = event => {
    console.log(`A monkeyId was submitted: ${this.state.monkeyId}`);
    event.preventDefault();
    this.props.history.push(`/${this.state.monkeyId}/static_test`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="static-form">
          <h1>iMacaque - Static test form</h1>
          <label className="static-form__label">
            Monkey ID
            <input
              className="static-form__input"
              type="text"
              value={this.state.monkeyId}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" className="static-form__button" />
          <HomeButton />
        </form>
      </div>
    );
  }
}

export default BinaryForm;
