import React, { Component } from "react";
import { Link } from "react-router-dom";

class StaticBackBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("countttt: ", this.state.count);
    if (this.state.count === 5) {
      console.log("clickedddd");
      window.location = "/";
    }
  };
  render() {
    return (
      <div className="static-fractals__back-btn" onClick={this.handleClick}>
        <button>Home</button>
      </div>
    );
  }
}

export default StaticBackBtn;
