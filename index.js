const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, async (req, res) => {
  console.log("Server is listening on localhost:5000");
});
