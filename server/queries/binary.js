const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const { connection } = mongoose;
exports.post = (req, res) => {
  console.log("bodyyyyyyyy: ", req.body);
  req.body.timestamp = new Date();
  connection.collection("trialsData").insert(req.body);
  res.send("hello");
};
