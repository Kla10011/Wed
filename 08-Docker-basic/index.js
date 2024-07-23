const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello, World");
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Listening on port 8080");
});