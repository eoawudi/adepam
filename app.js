const logger = require("morgan");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("combined"));
app.listen(3000);
app.get("/", (req, res) => {
  res.send({ name: "hello there" });
});
