const mongoose = require("mongoose");
const router = require("express").Router();

const BinaryData = mongoose.model("binaryData");

router.post("/monkeyId", (req, res) => {
  console.log("bodyyyyyyyy: ", req.body);
  BinaryData.create({ monkeyId: req.body.monkey_id });
  res.send("hello");
});

module.exports = router;
