const mongoose = require("mongoose");

const { Schema } = mongoose;

const staticDataSchema = new Schema({
  monkeyId: String,
  selected: String,
  timestamp: Date
});

mongoose.model("staticData", staticDataSchema);
