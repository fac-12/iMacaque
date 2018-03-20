import React, { Component } from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import shuffle from "../../helpers/shuffle";

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
      <div>
        <h1> Static Test </h1>
        {this.props.displayedAssets.map(item => (
          <Link
            to={`/${id}/static_test/reward/${item.letter}/${
              this.state.decisionTime
            }`}
            key={item.letter}
          >
            <img src={item.fractals} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Static_container;
