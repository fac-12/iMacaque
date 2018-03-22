import React, { Component } from "react";
import axios from "axios";

import HomeButton from "../Home_button";
import BinaryTrialsData from "./Render_data";

class TrialsDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trials_data: []
    };
  }
  componentDidMount() {
    axios
      .get("/all_trials_data")
      .then(res => {
        this.setState({ trials_data: res.data });
        console.log(this.state.trials_data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>iMacaque - Binary Trials data</h1>
        <BinaryTrialsData data={this.state.trials_data} />
        <HomeButton />
      </div>
    );
  }
}

export default TrialsDataContainer;
