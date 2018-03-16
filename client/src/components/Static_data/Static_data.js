import React, { Component } from "react";
import { Link } from "react-router-dom";

class StaticData extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.data.length === 0) return <h3>Loading...</h3>;
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
