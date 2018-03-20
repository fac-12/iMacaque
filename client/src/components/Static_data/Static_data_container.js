import React, { Component } from "react";
import axios from "axios";

import StaticData from "./Static_data";
import HomeButton from "../Home_button";

class StaticDataContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_data: []
    };
  }
  componentDidMount() {
    axios
      .get("/all_static_data")
      .then(res => {
        this.setState({ static_data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>iMacaque - Static data</h1>
        <StaticData data={this.state.static_data} />
        <HomeButton />
      </div>
    );
  }
}

export default StaticDataContainer;
