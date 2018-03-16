const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const { connection } = mongoose;
exports.get = (req, res) => {
  connection
    .collection("staticData")
    .find({})
    .toArray((err, obj) => {
      res.send(obj);
    });
};
