const mongodb = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));

const dbUrl =
  "mongodb+srv://adepam:adepam%40123@cluster0.9fdwx.mongodb.net/adepam?retryWrites=true&w=majority";

const db = mongodb
  .connect(dbUrl)
  .then((result) => app.listen(3000))
  .catch((err) => console.log({ err }));

app.get("/", (req, res) => {
  res.send({ name: "hello there" });
});
