const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());

// Static images
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// Endpoint
app.get("/", (req, res) => {
  const dataPath = path.join(__dirname, "data.json");
  const data = fs.readFileSync(dataPath, "utf-8");
  res.send(JSON.parse(data));
});

module.exports = app;
