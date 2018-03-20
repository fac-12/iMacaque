import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Static_data.css";

class StaticData extends Component {
  render() {
    if (this.props.data.length === 0)
      return <h3>You currently have no static tests...</h3>;
    return (
      <div className="static-data">
        <table className="static-data__table">
          <thead>
            <tr className="static-data__table-row">
              <th className="static-data__table-data">Trial type </th>
              <th className="static-data__table-data">Monkey ID</th>
              <th className="static-data__table-data">Reward position</th>
              <th className="static-data__table-data">Reward selected</th>
              <th className="static-data__table-data">Reward duration</th>
              <th className="static-data__table-data">Decision time</th>
              <th className="static-data__table-data">Date</th>
              <th className="static-data__table-data">Trial end time</th>
            </tr>
          </thead>
          {this.props.data.map(data => (
            <tbody key={data._id}>
              <tr>
                <td className="static-data__table-data">{data.trialType}</td>
                <td className="static-data__table-data">{data.monkeyId}</td>
                <td className="static-data__table-data">
                  {data.asestsPositions}
                </td>
                <td className="static-data__table-data">{data.reward}</td>
                <td className="static-data__table-data">
                  {data.videoDuration}
                </td>
                <td className="static-data__table-data">{data.decisionTime}</td>
                <td className="static-data__table-data">
                  {data.timestamp.split("T")[0]}
                </td>
                <td className="static-data__table-data">
                  {data.timestamp.split(/["T","."]+/)[1]}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default StaticData;
