import React, { Component } from "react";
import Webcam from "react-webcam";

class StartWebcam extends Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("hello: ", imageSrc);
  };

  render() {
    return (
      <div onClick={this.capture}>
        <Webcam
          audio={false}
          height={700}
          ref={node => (this.webcam = node)}
          screenshotFormat="image/jpeg"
          width={1000}
        />
      </div>
    );
  }
}

export default StartWebcam;
