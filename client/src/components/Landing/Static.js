import React, { Component } from "react";
import { Link } from "react-router-dom";

class Static extends Component {
  render() {
    return (
      <div>
        <Link to="/static_test"> Static Test </Link>
      </div>
    );
  }
}

export default Static;
