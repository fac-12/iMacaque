const mongoose = require("mongoose");

const { Schema } = mongoose;

const trialsDataSchema = new Schema({
  monkeyId: String,
  numberOfTrials: Number,
  choiceLeft: String,
  choiceRight: String,
  timestamp: Date
});

mongoose.model("trialsData", trialsDataSchema);
