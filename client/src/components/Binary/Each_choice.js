import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

class EachChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    };
  }

  componentDidMount() {
    let count = 0;
    console.log("countttt: ", count);
    if (count === this.props.trial_choices.length) {
      clearInterval(this.timer);
      console.log("wronggg");
    }
    this.timer = setInterval(() => {
      count += 1;
      this.setState({ id: count });
      console.log("interval count: ", count);
    }, 2000);
  }

  render() {
    console.log(this.props.trial_choices.length);
    if (this.props.trial_choices.length === 0) return <h3>Loading...</h3>;
    return (
      <div>
        <p>{this.props.trial_choices[this.state.id].Choices_left}</p>
        <p>{this.props.trial_choices[this.state.id].Choices_right}</p>
        hello
      </div>
    );
  }
}

export default withRouter(EachChoice);
