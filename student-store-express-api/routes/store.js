const express = require("express");
const cors = require("cors");
const StoreModel = require("../models/StoreModel");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await StoreModel.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
