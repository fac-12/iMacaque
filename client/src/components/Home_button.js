import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeButton extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="home-button">
          {" "}
          Home button{" "}
        </Link>
      </div>
    );
  }
}

export default HomeButton;
