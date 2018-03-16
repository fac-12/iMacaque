import React, { Component } from "react";
import { Link } from "react-router-dom";
import Binary from "./Binary";
import Static from "./Static";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1> iMacaque </h1>
        <Link to="/all_static_data">View static data</Link>
        <Binary />
        <Static />
      </div>
    );
  }
}

export default Landing;
