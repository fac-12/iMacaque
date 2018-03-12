import React, { Component } from "react";
import axios from "axios";
import BinaryContainer from "./Binary_container";
class Trial_form extends Component {
  constructor(props) {
    super(props);
    this.state = { monkey_id: "", trial_number: 0, choices: [] };
  }

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    for (var i = 0; i < this.state.trial_number; i++) {
      this.state.choices.push({
        Choices_left: event.target["choiceLeft" + i].value,
        Choices_right: event.target["choiceRight" + i].value
      });
    }
    console.log(this.state);
  };

  setTrial = () => {
    var indents = [];
    for (var i = 0; i < this.state.trial_number; i++) {
      indents.push(
        <div key={i}>
          <p>{i}</p>
          <label htmlFor={i}>Choice left</label>
          <input
            className="indent"
            type="text"
            id={i}
            name={`choiceLeft${i}`}
          />
          <label htmlFor={i}>Choice right</label>
          <input
            className="indent"
            type="text"
            id={i}
            name={`choiceRight${i}`}
          />
        </div>
      );
    }
    console.log(indents);
    return indents;
  };

  render() {
    return (
      <div>
        <h2>Trial form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="monkeyId">Monkey ID</label>
          <input
            type="text"
            id="monkeyId"
            name="monkey_id"
            value={this.state.monkeyId}
            onChange={this.handleChange}
          />
          <label htmlFor="no_of_trial">Number of trial</label>
          <input
            type="number"
            id="no_of_trial"
            name="trial_number"
            value={this.state.numberOfTrials}
            onChange={this.handleChange}
          />
          {this.setTrial()}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Trial_form;
