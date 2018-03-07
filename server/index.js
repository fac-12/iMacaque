const express = require("express");
const mongoose = require("mongoose");
require("./models/Binary_data");
require("./models/Static_data");
mongoose.connect(process.env.DATABASE_URL);

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log("App is listening on " + port);
});
