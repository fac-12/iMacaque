import React, { Component } from "react";
import { browserHistory } from "react-router";

class BinaryPlus extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/choice_appear");
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>+</h1>
      </div>
    );
  }
}

export default BinaryPlus;
