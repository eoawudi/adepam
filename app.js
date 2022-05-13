const mongodb = require("mongoose");
const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));

const dbUrl = `mongodb+srv://${process.env.USERNAME}:${process.env.KEY}@cluster0.9fdwx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const db = mongodb
  .connect(dbUrl)
  .then((result) => app.listen(3000))
  .catch((err) => console.log({ err }));

app.get("/", (req, res) => {
  res.send({ name: "hello there" });
});
