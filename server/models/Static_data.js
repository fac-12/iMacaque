const mongoose = require("mongoose");

const { Schema } = mongoose;

const staticDataSchema = new Schema({
  trialId: Number,
  monkeyId: String,
  A: Boolean,
  B: Boolean,
  C: Boolean,
  D: Boolean,
  E: Boolean,
  F: Boolean,
  G: Boolean,
  H: Boolean,
  I: Boolean,
  timestamp: Date
});

mongoose.model("staticData", staticDataSchema);
