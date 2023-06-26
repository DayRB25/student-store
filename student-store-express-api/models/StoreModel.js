const { storage } = require("../data/storage");

class StoreModel {
  static async listOrders() {
    const purchases = storage.get("purchases").value();
    return purchases;
  }
  static async listProducts() {
    const products = storage.get("products").value();
    return products;
  }
  static async fetchProductById(productId) {
    // fetch a single product
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }
}

module.exports = StoreModel;
