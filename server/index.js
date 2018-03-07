const express = require("express");
const mongoose = require("mongoose");
require("./models/Binary_data");
require("./models/Static_data");
mongoose.connect(process.env.DATABASE_URL);

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("/app/client/build/index.html"));
  });
}
const port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log("App is listening on " + port);
});
