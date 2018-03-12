import React, { Component } from "react";
import axios from "axios";
class MonkeyId extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/monkeyId", { monkey_id: this.state.value })
      .then(res => console.log("monkey id: ", res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <p>Enter monkey id</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="monkey_id"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default MonkeyId;
