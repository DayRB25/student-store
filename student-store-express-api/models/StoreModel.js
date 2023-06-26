const { storage } = require("../data/storage");

class StoreModel {
  static async listOrders() {
    const purchases = storage.get("purchases").value();
    return purchases;
  }
}

module.exports = StoreModel;
