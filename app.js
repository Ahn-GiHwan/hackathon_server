const express = require("express");
const mongoose = require("mongoose");
const saramRouter = require("./routes/saram");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// app.use("/public", express.static(__dirname + "/public"));

mongoose
  .connect(process.env.KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/saram", saramRouter);

app.listen(process.env.PORT || 5555, () => {
  console.log("start server ");
});