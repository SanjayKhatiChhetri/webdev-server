const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

const initMongoose = require("./lib/mongoose");
initMongoose();

const statsRoutes = require("./routes/stats.routes");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("HELLO WORLD!");
});

app.use("/stats", statsRoutes);

app.listen(4000, () => {
  console.log("Starting on port 4000");
});
