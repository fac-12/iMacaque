import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";
class Reward extends Component {
  constructor(props) {
    super(props);
    this.state = { monkeyId: "", selected: "" };
  }
  Assets = {
    A: require("../../assets/rewards/A.mp4"),
    B: require("../../assets/rewards/B.mp4"),
    C: require("../../assets/rewards/C.mp4"),
    E: require("../../assets/rewards/E.mp4"),
    F: require("../../assets/rewards/F.mp4"),
    G: require("../../assets/rewards/G.mp4"),
    I: require("../../assets/rewards/I.mp4")
  };

  videoEnd = () => {
    const staticData = {
      monkeyId: this.props.match.params.monkeyId,
      reward: this.props.match.params.letter
    };
    console.log("static data: ", staticData);
    axios
      .post("/static_trial", staticData)
      .then(res => console.log(res))
      .catch(err => err);
    this.props.history.push(`/${this.props.match.params.monkeyId}/static_test`);
  };

  render() {
    const letter = this.props.match.params.letter;
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
          <source src={this.Assets[letter]} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Reward;
