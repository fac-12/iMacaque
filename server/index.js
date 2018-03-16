const express = require("express");
const mongoose = require("mongoose");
require("./models/Binary_data");
require("./models/Trials_data");
require("./models/Static_data");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const routes = require("./routes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require("env2")("./config.env");

mongoose.connect(process.env.DATABASE_URL);
mongoose.promise = global.promise;

app.use(routes);

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

module.exports = app;
