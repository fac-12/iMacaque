import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

class EachChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      count: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ id: this.state.count, count: this.state.count + 1 });
      console.log("interval count: ", this.state.count);
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.state.count === this.props.trial_choices.length) {
      console.log("wronggg SHOUDL STOP TIME");
      clearInterval(this.timer);
    }
    return true;
  }

  render() {
    console.log(this.props.trial_choices.length);
    if (this.props.trial_choices.length === 0) return <h3>Loading...</h3>;
    return (
      <div>
        {this.props.trial_choices.length > this.state.count ? (
          <div>
            <p>{this.props.trial_choices[this.state.id].Choices_left}</p>
            <p>{this.props.trial_choices[this.state.id].Choices_right}</p>
            hello
          </div>
        ) : (
          <div> Done! </div>
        )}
      </div>
    );
  }
}

export default withRouter(EachChoice);
