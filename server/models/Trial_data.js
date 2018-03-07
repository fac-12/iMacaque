const mongoose = require("mongoose");
const { Schema } = mongoose;

const trialDataSchema = new Schema({
  trial_id: Number
});

mongoose.model("trial__data", trialDataSchema);
