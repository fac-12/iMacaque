import React, { Component } from "react";
import { browserHistory } from "react-router";
import Countdown from "react-countdown-now";

class StartTrialCountdown extends Component {
  startTrial = () => {
    console.log("start trial function!!!");
    this.props.history.push("/binary_trial");
  };

  renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <input type="button" onClick={this.startTrial()} />;
    } else {
      return (
        <p>
          {minutes} : {seconds}
        </p>
      );
    }
  };

  render() {
    return (
      <div>
        <p>Trial starts in </p>
        <Countdown date={Date.now() + 5000} renderer={this.renderer} />
      </div>
    );
  }
}

export default StartTrialCountdown;
