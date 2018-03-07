const mongoose = require("mongoose");
const { Schema } = mongoose;

const staticDataSchema = new Schema({
    trialId: Number,
    monkeyId: Number,
    option1: Boolean,
    option2: Boolean,
    option3: Boolean,
    option4: Boolean,
    option5: Boolean,
    option6: Boolean,
    option7: Boolean,
    option8: Boolean,
    option9: Boolean,
    timestamp: Date
});

mongoose.model("staticData", staticDataSchema);
