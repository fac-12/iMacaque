import React from "react";

const setTrial = num => {
  const inputs = [];
  for (let i = 0; i < num; i++) {
    inputs.push(
      <div key={i}>
        <label htmlFor={i} className="binary__form-label">
          Choice left
        </label>{" "}
        <span>{i}</span>
        <input
          className="binary__form-input"
          type="text"
          id={i}
          name={`choiceLeft${i}`}
        />
        <label htmlFor={i} className="binary__form-label">
          Choice right
        </label>{" "}
        <span>{i}</span>
        <input
          className="inputs"
          type="text"
          id={i}
          name={`choiceRight${i}`}
          className="binary__form-input"
        />
      </div>
    );
  }
  return inputs;
};

export default setTrial;
