const mongoose = require("mongoose");

const { Schema } = mongoose;

const staticDataSchema = new Schema({
  trialType: String,
  monkeyId: String,
  reward: String,
  videoDuration: String,
  asestsPositions: Array,
  decisionTime: String,
  timestamp: Date
});

const staticData = mongoose.model("staticData", staticDataSchema);

module.exports = staticData;
