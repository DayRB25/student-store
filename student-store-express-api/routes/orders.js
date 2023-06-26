const express = require("express");
const cors = require("cors");
const StoreModel = require("../models/StoreModel");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await StoreModel.listOrders();
    res.status(200).json({ orders });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
