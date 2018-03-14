import React, { Component } from "react";
import { browserHistory } from "react-router";

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
      <form onSubmit={this.handleSubmit}>
        <label>
          Monkey id:
          <input
            type="text"
            value={this.state.monkeyId}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BinaryForm;
