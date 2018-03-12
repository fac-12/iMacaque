const mongoose = require("mongoose");

const { Schema } = mongoose;

const binaryDataSchema = new Schema({
  trialId: Number,
  trialKey: Number,
  monkeyId: String,
  choiceLeft: String,
  choiceRight: String,
  decisionTime: String,
  firstTouch: String,
  endOfReward: String,
  endOfTrial: String,
  timestamp: Date
});

mongoose.model("binaryData", binaryDataSchema);
