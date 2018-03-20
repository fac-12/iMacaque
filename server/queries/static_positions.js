const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const { connection } = mongoose;
exports.post = (req, res) => {
  console.log("bodyyyyyyyy: ", req.body);
  // connection
  //   .collection("staticData")
  //   .findOne({ monkeyId: req.body.id }, (err, data) => {
  //     console.log("Data: ", data);
  // data.asestsPostions.push(req.body.asestsPostions);
  // data.save((err, dataAdded) => {
  //   res.send("hello");
  // });
  // });
};
