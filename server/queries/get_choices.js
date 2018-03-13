const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const { connection } = mongoose;
exports.get = (req, res) => {
  console.log(req.params.trialId);
  console.log("hello");
  connection
    .collection("trialsData")
    .findOne({ trialId: `${req.params.trialId}` }, (err, obj) => {
      res.send(obj.choices);
    });
};
