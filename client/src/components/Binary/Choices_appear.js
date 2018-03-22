import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";
import EachChoice from "./Each_choice";

class ChoicesAppear extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.trialId;
    axios
      .get(`/choices/${id}`)
      .then(res => {
        this.setState({ choices: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const choices = this.state.choices;
    const conditionalRender =
      choices.length > 0 ? (
        <EachChoice
          trial_choices={this.state.choices}
          displayedAssets={this.props.displayedAssets}
        />
      ) : (
        <div>loading...</div>
      );

    return <div>{conditionalRender}</div>;
  }
}

export default ChoicesAppear;
