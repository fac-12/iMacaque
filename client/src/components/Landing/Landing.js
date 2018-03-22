import React, { Component } from "react";
import { Link } from "react-router-dom";
import Binary from "./Binary";
import Static from "./Static";
import "./landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__text"> iMacaque </h1>
        <p className="landing__text">
          An app designed for monkeys and researchers of the University of
          Cambridge to assist with the static choice and binary choice tasks.
        </p>
        <p className="landing__text">
          The research focuses on the orbitofrontal cortex (OFC) of the brain -
          among the least understood region of the brain. It is thought this
          part of the brain is integral in value based decision making and risk
          taking.
        </p>
        <p className="landing__text">
          It is hoped that through this research we can understand more about
          the OFC; a step towards learning more about illnesses suchas
          addiction, Alzheimers and schizophrenia.
        </p>
        <div className="landing__buttons">
          <Link to="/all_static_data" className="landing__button">
            View static data
          </Link>
          <Link to="/all_trials_data" className="landing__button">
            View binary trials set
          </Link>
          <Binary />
          <Static />
        </div>
      </div>
    );
  }
}

export default Landing;
