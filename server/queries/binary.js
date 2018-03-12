const mongoose = require("mongoose");
const router = require("express").Router();

const TrialsData = mongoose.model("trialsData");

router.post("/monkeyId", (req, res) => {
  console.log("bodyyyyyyyy: ", req.body);
  TrialsData.create({ monkeyId: req.body.monkey_id });
  res.send("hello");
});

module.exports = router;
