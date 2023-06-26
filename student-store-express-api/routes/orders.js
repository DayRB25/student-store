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

router.get("/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await StoreModel.fetchOrderById(orderId);
    if (!order) {
      res.status(404).json("Requested resource not found");
    }
    res.status(200).json({ order });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
