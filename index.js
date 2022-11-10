const express = require("express");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

dotenv.config();

const PORT = process.env.PORT || 5000;

// 이거 건드리지 말기!!!
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/auth", authRoute);

app.listen(PORT, async (req, res) => {
  console.log("Server is listening on localhost:5000");
});
