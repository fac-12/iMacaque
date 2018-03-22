import React, { Component } from "react";
import { browserHistory } from "react-router";

class BinaryPlus extends Component {
  componentDidMount() {
    setTimeout(() => {
      const id = this.props.match.params.trialId;
      this.props.history.push(`/choice_appear/${id}`);
    }, 5000);
  }
  render() {
    return (
      <div className="binary-plus">
        <h1>+</h1>
      </div>
    );
  }
}

export default BinaryPlus;
