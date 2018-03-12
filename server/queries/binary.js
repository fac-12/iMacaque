const mongoose = require("mongoose");
const router = require("express").Router();

mongoose.connect(process.env.DATABASE_URL);
const { connection } = mongoose;
router.post("/trial_form", (req, res) => {
  console.log("bodyyyyyyyy: ", req.body);
  req.body.timestamp = new Date();
  connection.collection("trialsData").insert(req.body);
  res.send("hello");
});

module.exports = router;
