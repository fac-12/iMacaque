import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";
class Reward extends Component {
  constructor(props) {
    super(props);
    this.state = { monkeyId: "", selected: "" };
  }
  arrayPositions = this.props.displayedAssets.map((data, i) => {
    return this.props.displayedAssets[i].letter;
  });
  videoEnd = () => {
    const staticData = {
      trialType: "Static",
      monkeyId: this.props.match.params.monkeyId,
      reward: this.props.match.params.letter,
      videoDuration: this.rewardVideo.duration,
      asestsPositions: this.arrayPositions,
      decisionTime: this.props.match.params.decisionTime
    };
    axios
      .post("/static_trial", staticData)
      .then(res => console.log(res))
      .catch(err => err);
    this.props.history.push(`/${this.props.match.params.monkeyId}/static_test`);
  };

  render() {
    const letter = this.props.match.params.letter;
    const letterChosen = this.props.displayedAssets.filter((data, i) => {
      if (this.props.displayedAssets[i].letter === letter) {
        return this.props.displayedAssets[i];
      }
    });
    return (
      <div>
        <video
          width="100%"
          height="100%"
          autoPlay
          onEnded={this.videoEnd}
          ref={vid => {
            this.rewardVideo = vid;
          }}
        >
          <source src={letterChosen[0].reward} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Reward;
