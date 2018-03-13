import React from "react";

const setTrial = num => {
  const inputs = [];
  for (let i = 0; i < num; i++) {
    inputs.push(
      <div key={i}>
        <p>{i}</p>
        <label htmlFor={i}>Choice left</label>
        <input className="inputs" type="text" id={i} name={`choiceLeft${i}`} />
        <label htmlFor={i}>Choice right</label>
        <input className="inputs" type="text" id={i} name={`choiceRight${i}`} />
      </div>
    );
  }
  return inputs;
};

export default setTrial;
