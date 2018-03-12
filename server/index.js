const express = require("express");
const mongoose = require("mongoose");
require("./models/Binary_data");
require("./models/Trials_data");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./queries/binary");

app.use(bodyParser.json());
require("env2")("./config.env");

mongoose.connect(process.env.DATABASE_URL);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});

app.use(routes);
module.exports = app;
