import React, { Component } from "react";
import { browserHistory } from "react-router";

class Reward extends Component {
  Assets = {
    A: require("../../assets/rewards/A.mp4"),
    B: require("../../assets/rewards/B.mp4"),
    C: require("../../assets/rewards/C.mp4"),
    E: require("../../assets/rewards/E.mp4"),
    F: require("../../assets/rewards/F.mp4"),
    G: require("../../assets/rewards/G.mp4"),
    I: require("../../assets/rewards/I.mp4")
  };

  componentWillUnmount() {
    console.log("videoooo: ", this.rewardVideo);
    console.log("videoooo: ", this.rewardVideo.duration);
    // const minutes = parseInt(this.rewardVideo.duration / 60, 10);
    // const seconds = this.rewardVideo.duration % 60;
    // console.log(`${minutes} : ${seconds}`);
  }

  videoEnd = () => {
    this.props.history.push(`/${this.props.match.params.letter}/static_test`);
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
