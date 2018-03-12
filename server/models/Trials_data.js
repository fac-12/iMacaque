const mongoose = require("mongoose");

const { Schema } = mongoose;

const trialsDataSchema = new Schema({
  monkeyId: String,
  numberOfTrials: Number,
  choices: Array,
  timestamp: Date
});

mongoose.model("trialsData", trialsDataSchema);
