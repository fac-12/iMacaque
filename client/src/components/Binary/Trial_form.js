import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import setTrial from "../../helpers/setTrial";
import randomId from "../../helpers/random_id";
import HomeButton from "../Home_button";
import "./Binary.css";
class Trial_form extends Component {
  constructor(props) {
    super(props);
    this.state = { trialId: "", monkeyId: "", numberOfTrials: 0, choices: [] };
  }
  validation = input => {
    const regex = /[A,B,C,D,E,F,G,H,I]/g;
    const testRegex = regex.test(input);
    if (!testRegex || input.length !== 1) {
      return (
        <p>Choices can only be enter one of these letters: A,B,C,D,E,F,G,H,I</p>
      );
    }
  };
  handleChange = event => {
    const target = event.target;
    this.setState({
      trialId: randomId(),
      [target.name]: target.value.toUpperCase()
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.validation();
    for (var i = 0; i < this.state.numberOfTrials; i++) {
      this.state.choices.push({
        Choices_left: event.target["choiceLeft" + i].value,
        Choices_right: event.target["choiceRight" + i].value
      });
    }
    axios
      .post("/trial_form", this.state)
      .then(res => console.log(res))
      .catch(err => console.log("Trial form err: ", err));

    this.props.history.push(`/trial_countdown/${this.state.trialId}`);
  };

  render() {
    return (
      <div className="binary">
        <h2>iMacaque - Binary Trial form</h2>
        <form onSubmit={this.handleSubmit} className="binary__form">
          <label htmlFor="monkeyId" className="binary__form-label">
            Monkey ID
          </label>
          <input
            type="text"
            id="monkeyId"
            name="monkeyId"
            value={this.state.monkeyId}
            onChange={this.handleChange}
            className="binary__form-input"
          />
          <label htmlFor="no_of_trial" className="binary__form-label">
            Number of trial
          </label>
          <input
            type="number"
            id="no_of_trial"
            name="numberOfTrials"
            value={this.state.numberOfTrials}
            onChange={this.handleChange}
            className="binary__form-input"
          />
          <div>{setTrial(this.state.numberOfTrials)}</div>
          <input type="submit" value="submit" className="binary__form-submit" />
          <HomeButton />
        </form>
      </div>
    );
  }
}

export default Trial_form;
