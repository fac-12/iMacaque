import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";
class BinaryReward extends Component {
  constructor(props) {
    super(props);
  }

  videoEnd = () => {
    const id = this.props.match.params.trialId;
    this.props.history.push(`/choice_appear/${id}`);
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

export default BinaryReward;
