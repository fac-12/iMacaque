const generateTrialId = () =>
  Math.floor(Math.random() * Math.floor(1000000)).toString();

export default generateTrialId;
