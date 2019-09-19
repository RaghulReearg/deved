const express = require("express");
const mongoose = require("mongoose");
var app = express();

require("dotenv/config");

var postroute = require("./routes/posts");
var bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use("/posts", postroute);

// app.get("/", (req, res) => {
//   res.send("Hello from the server");
// });
// app.get("/posts", (req, res) => {
//   res.send("Hello from the post");
// });
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("conntcted")
);
app.listen(3000, console.log("Listyening"));
