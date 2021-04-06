const express = require("express");
const mongoose = require("mongoose");

var path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

var MONGODB_URI =
  "mongodb+srv://riveram2:Luna%40Nyc12@cluster0.t6g9u.mongodb.net/Unit17?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
console.log(MONGODB_URI);

// routes
app.use(require(path.join(__dirname, "routes", "apiRoutes.js")));
//app.use('/', require(path.join(__dirname, "/routes/htmlRoutes.js")));
//

// serve HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "stats.html"));
});

app.listen(PORT, () => {
  console.log();
});
