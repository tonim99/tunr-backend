require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/connection");

const cors = require("cors");
const corsOptions = require("./configs/cors.js");

const express = require("express");
const app = express();

const morgan = require("morgan");
const tunrRouter = require("./controllers/songsController");


NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(cors()) //anybody can make a request
app.use(express.json());
app.use(morgan("tiny")); //logging


app.get("/", (req, res) => {
  res.json({ hello: "Hello Tunr!" });
});

app.use("/tunr", tunrRouter);

app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
