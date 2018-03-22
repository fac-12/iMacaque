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
      console.log("wronggg SHOULD STOP TIME");
      clearInterval(this.timer);
    }
    return true;
  }
  letterChosen = letter =>
    this.props.displayedAssets.filter((data, i) => {
      if (this.props.displayedAssets[i].letter === letter) {
        return this.props.displayedAssets[i];
      }
    });
  render() {
    const id = this.props.match.params.trialId;
    if (this.props.trial_choices.length === 0) return <h3>Loading...</h3>;
    return (
      <div className="each-choice">
        {this.props.trial_choices.length >= this.state.count ? (
          <div>
            <Link
              to={`/binary_trial/${id}/reward/${
                this.props.trial_choices[this.state.id].Choices_left
              }`}
            >
              <img
                className="each-choice__image"
                src={
                  this.letterChosen(
                    this.props.trial_choices[this.state.id].Choices_left
                  )[0].fractals
                }
              />
            </Link>
            <span className="each-choice__span">+</span>
            <Link
              to={`/binary_trial/${id}/reward/${
                this.props.trial_choices[this.state.id].Choices_right
              }`}
            >
              <img
                className="each-choice__image"
                src={
                  this.letterChosen(
                    this.props.trial_choices[this.state.id].Choices_right
                  )[0].fractals
                }
              />
            </Link>
          </div>
        ) : (
          <div>done</div>
        )}
      </div>
    );
  }
}

export default withRouter(EachChoice);
