import React, { Component } from "react";
import { browserHistory } from "react-router";
import axios from "axios";

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
    return (
      <div>
        {this.state.choices.map((data, index) => (
          <div key={index}>
            <p>{data.Choices_left}</p>
            <p>{data.Choices_right}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ChoicesAppear;
