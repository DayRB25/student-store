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
}

module.exports = StoreModel;
