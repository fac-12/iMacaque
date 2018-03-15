// const mongoose = require("mongoose");
//
// const staticData = mongoose.model("staticData");
// const { connection } = mongoose;
// exports.get = (req, res) => {
//   connection.collection("staticData").find({}, (err, data) => {
//     console.log(data);
//   });
// };
const mongoose = require("mongoose");

const staticData = mongoose.model("staticData");
exports.get = (req, res) => {
  staticData.findOne({ reward: "A" }, (err, data) => {
    console.log(data);
  });
};
