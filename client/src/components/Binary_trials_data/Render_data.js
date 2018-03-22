import React, { Component } from "react";
import { Link } from "react-router-dom";

class BinaryTrialsData extends Component {
  render() {
    if (this.props.data.length === 0)
      return <h3>You currently have no static tests...</h3>;
    return (
      <div className="static-data">
        <table className="static-data__table">
          <thead>
            <tr className="static-data__table-row">
              <th className="static-data__table-data">Trial ID </th>
              <th className="static-data__table-data">Monkey ID</th>
              <th className="static-data__table-data">Number of trials</th>
              <th className="static-data__table-data">Choices</th>
              <th className="static-data__table-data">Date</th>
              <th className="static-data__table-data">Time</th>
            </tr>
          </thead>
          {this.props.data.map(data => (
            <tbody key={data._id}>
              <tr>
                <td className="static-data__table-data">{data.trialId}</td>
                <td className="static-data__table-data">{data.monkeyId}</td>
                <td className="static-data__table-data">
                  {data.numberOfTrials}
                </td>
                <td className="static-data__table-data">
                  {data.choices.map(data => (
                    <div>
                      <span>Choice-left: {data.Choices_left}</span>
                      {"   "}
                      <span>Choice-right: {data.Choices_right}</span>
                    </div>
                  ))}
                </td>
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

export default BinaryTrialsData;
