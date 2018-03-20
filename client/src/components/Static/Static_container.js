import React, { Component } from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import shuffle from "../../helpers/shuffle";
import StaticBackBtn from "./Back_button";
import "./Static.css";
class Static_container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decisionTime: ""
    };
  }
  componentDidMount() {
    this.totalSeconds = 0;
    this.timer = setInterval(this.setTime, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  pad = val => {
    const valString = `${val}`;
    if (valString.length < 2) {
      return `0${valString}`;
    }
    return valString;
  };
  setTime = () => {
    ++this.totalSeconds;
    this.setState({
      decisionTime: `${this.pad(parseInt(this.totalSeconds / 60))}:${this.pad(
        this.totalSeconds % 60
      )}`
    });
  };

  render() {
    const id = this.props.match.params.monkeyId;
    return (
      <div className="static-fractals">
        <StaticBackBtn />
        <div className="static-fractals__container">
          {this.props.displayedAssets.map(item => (
            <Link
              to={`/${id}/static_test/reward/${item.letter}/${
                this.state.decisionTime
              }`}
              key={item.letter}
            >
              <img src={item.fractals} className="static-fractals__images" />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Static_container;
