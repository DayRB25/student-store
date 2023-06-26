const express = require("express");
const cors = require("cors");
const orderRoute = require("./routes/orders");
const storeRoute = require("./routes/store");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/orders", orderRoute);
app.use("/api/store", storeRoute);

module.exports = app;
