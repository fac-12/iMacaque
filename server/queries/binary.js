const mongoose = require("mongoose");
const router = require("express").Router();

// const BinaryData = mongoose.model("binaryData");

router.post("/monkeyId", (req, res) => {
  // BinaryData.insertOne({ monkeyId: req.body.monkey_id });
  console.log("bodyyyyyyyy: ", req.body);
  res.send("hello");
});

module.exports = router;
