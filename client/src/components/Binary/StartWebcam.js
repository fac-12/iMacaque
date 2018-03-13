import React, { Component } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { browserHistory } from "react-router";
// import { REACT_APP_GOOGLE_API_KEY } from "../../../../../config";

class StartWebcam extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    const id = this.props.match.params.trialId;
    console.log("image source: ", imageSrc);
    this.props.history.push(`/binary_plus/${id}`);
    // axios
    //   .post(
    //     `https://www.googleapis.com/urlshortener/v1/url?key=${
    //       process.env.GOOGLE_API_KEY
    //     }`,
    //     {
    //       longUrl: `http://www.google.com`
    //     }
    //   )
    //   .then(res => console.log("shorten url: ", res.data))
    //   .catch(err => err);
  };

  render() {
    return (
      <div onClick={this.capture}>
        <Webcam
          audio={false}
          height={700}
          ref={node => (this.webcam = node)}
          screenshotFormat="image/webp"
          width={1000}
        />
      </div>
    );
  }
}

export default StartWebcam;
