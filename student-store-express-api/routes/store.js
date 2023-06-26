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

router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await StoreModel.fetchProductById(productId);
    if (!product) {
      res.status(404).json("Requested resource not found");
    }
    res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
