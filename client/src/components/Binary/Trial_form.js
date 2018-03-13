import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";
import setTrial from "../../helpers/setTrial";
class Trial_form extends Component {
  constructor(props) {
    super(props);
    this.state = { monkeyId: "", numberOfTrials: 0, choices: [] };
  }

  handleChange = event => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    for (var i = 0; i < this.state.numberOfTrials; i++) {
      this.state.choices.push({
        Choices_left: event.target["choiceLeft" + i].value,
        Choices_right: event.target["choiceRight" + i].value
      });
    }
    axios
      .post("/trial_form", this.state)
      .then(res => res)
      .catch(err => console.log("Trial form err: ", err));
    this.props.history.push("/trial_countdown");
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
            name="monkeyId"
            value={this.state.monkeyId}
            onChange={this.handleChange}
          />
          <label htmlFor="no_of_trial">Number of trial</label>
          <input
            type="number"
            id="no_of_trial"
            name="numberOfTrials"
            value={this.state.numberOfTrials}
            onChange={this.handleChange}
          />
          {setTrial(this.state.numberOfTrials)}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Trial_form;
