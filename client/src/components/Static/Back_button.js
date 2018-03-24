import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Static.css";
class StaticBackBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("countttt: ", this.state.count);
    if (this.state.count === 10) {
      console.log("clickedddd");
      window.location = "/";
    }
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        <button className="static-fractals__back-btn">Home</button>
      </div>
    );
  }
}

export default StaticBackBtn;
