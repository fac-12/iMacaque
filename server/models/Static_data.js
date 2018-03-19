const mongoose = require("mongoose");

const { Schema } = mongoose;

const staticDataSchema = new Schema({
  monkeyId: String,
  reward: String,
  videoDuration: String,
  timestamp: Date
});

const staticData = mongoose.model("staticData", staticDataSchema);

module.exports = staticData;
