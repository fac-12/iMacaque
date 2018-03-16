const mongoose = require("mongoose");

mongoose.set("debug", true);
const { Schema } = mongoose;

const staticDataSchema = new Schema({
  monkeyId: String,
  reward: String,
  timestamp: Date
});

const staticData = mongoose.model("staticData", staticDataSchema);

module.exports = staticData;
