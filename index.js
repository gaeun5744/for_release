const express = require("express");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(express.json());

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/posts", postRoute);
app.use("/categories", categoryRoute);

app.listen(port, () => {
  console.log("Backend is running");
});
