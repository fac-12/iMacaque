import React, { Component } from "react";
import { Link } from "react-router-dom";

class StaticData extends Component {
  render() {
    if (this.props.data.length === 0) return <h3>Loading...</h3>;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Trial type </td>
              <td>Monkey ID</td>
              <td>Reward position</td>
              <td>Reward selected</td>
              <td>Reward duration</td>
              <td>Date</td>
              <td>Time</td>
            </tr>
          </thead>
          {this.props.data.map(data => (
            <tbody key={data._id}>
              <tr>
                <td>{data.trialType}</td>
                <td>{data.monkeyId}</td>
                <td>{data.reward}</td>
                <td>{data.videoDuration}</td>
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
