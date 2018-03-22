import React, { Component } from "react";
import { browserHistory } from "react-router";
import Countdown from "react-countdown-now";
import Router from "react-router";

class StartTrialCountdown extends Component {
  startTrial = () => {
    console.log("start trial function!!!");
    const id = this.props.match.params.trialId;
    this.props.history.push(`/start_webcam/${id}`);
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
      <div className="binary-countdown">
        <p>Trial starts in </p>
        <Countdown date={Date.now() + 5000} renderer={this.renderer} />
      </div>
    );
  }
}

export default StartTrialCountdown;
