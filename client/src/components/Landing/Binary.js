import React, { Component } from "react";
import { Link } from "react-router-dom";

class Binary extends Component {
  render() {
    return (
      <div className="landing__buttons">
        <Link to="/trial_form" className="landing__button">
          {" "}
          Binary Test{" "}
        </Link>
      </div>
    );
  }
}

export default Binary;
