import React, { Component } from "react";
import { Link } from "react-router-dom";
import { browserHistory } from "react-router";
import shuffle from "../../helpers/shuffle";

class Static_container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.displayedAssets);
    const id = this.props.match.params.monkeyId;
    return (
      <div>
        <h1> Static Test </h1>
        {this.props.displayedAssets.map(item => (
          <Link
            to={`/${id}/static_test/reward/${item.letter}`}
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
