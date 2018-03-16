import React, { Component } from "react";
import { Link } from "react-router-dom";

import { parseDateTime } from "../../helpers/date_conversion";

class StaticData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("propss: ", this.props.data);
    console.log("datatt: ", this.props.data.timestamp);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Monkey ID</td>
              <td>Reward selected</td>
              <td>Date</td>
              <td>Time</td>
            </tr>
          </thead>
          {this.props.data.map(data => (
            <tbody key={data._id}>
              <tr>
                <td>{data.monkeyId}</td>
                <td>{data.reward}</td>
                <td>{data.timestamp.split("T")[0]}</td>
                <td>{data.timestamp.split(/["T","."]+/)[1]}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default StaticData;
