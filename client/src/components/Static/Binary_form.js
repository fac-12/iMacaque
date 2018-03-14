import React, { Component } from "react";

class BinaryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monkeyId: "" };
  }

  handleChange = event => {
    this.setState({ monkeyId: event.target.value });
  };

  handleSubmit = event => {
    alert(`A monkeyId was submitted: ${this.state.value}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
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
