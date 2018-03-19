import React, { Component } from "react";
import { Link } from "react-router-dom";

class Static extends Component {
  render() {
    return (
      <div className="landing__buttons">
        <Link to="/static_form" className="landing__button">
          Static Test
        </Link>
      </div>
    );
  }
}

export default Static;
