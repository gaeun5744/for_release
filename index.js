const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// 이거 건드리지 말기!!!
if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, async (req, res) => {
  console.log("Server is listening on localhost:5000");
});
