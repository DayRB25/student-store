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
  static async fetchOrderById(orderId) {
    // fetch a single order
    const order = storage
      .get("purchases")
      .find({ id: Number(orderId) })
      .value();
    return order;
  }
  static async recordOrder(order) {
    // create a new order

    const orders = await StoreModel.listOrders();
    const orderId = orders.length + 1;
    const postedAt = new Date().toISOString();

    // to calculate order total, loop through each item in shopping cart
    // extract its id, then use StoreModel.fetchProductById to find product
    // then use its price to add to total
    let orderTotal = 0;

    // product rows append to response to mimic response provided from backend Codepath provided (ease of integration into codebase)
    let productRows = [];

    for (const item of order.shoppingCart) {
      const id = item.itemId;
      const product = await StoreModel.fetchProductById(id);
      orderTotal += parseFloat((product.price * item.quantity).toFixed(2));
      productRows.push(product);
    }

    const newOrder = {
      id: orderId,
      postedAt,
      total: orderTotal,
      ...order,
      productRows,
    };

    storage.get("purchases").push(newOrder).write();

    return newOrder;
  }
}

module.exports = StoreModel;
