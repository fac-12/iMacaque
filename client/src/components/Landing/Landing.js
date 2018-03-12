import React, { Component } from "react";
import Binary from "./Binary";
import Static from "./Static";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1> iMacaque </h1>
        <Binary />
        <Static />
      </div>
    );
  }
}

export default Landing;
