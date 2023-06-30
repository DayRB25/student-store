import * as React from "react";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../OrderCard/OrderCard";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [ordersMatchingEmail, setOrdersMatchingEmail] = useState([]);

  const handleUpdateSearchEmail = (e) => {
    setSearchEmail(e.target.value);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/orders");
        setOrders(res.data.orders);
      } catch (err) {}
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    if (searchEmail === "") {
      setOrdersMatchingEmail(orders);
    } else {
      const newDisplay = orders.filter((item) =>
        item.user.email.toLowerCase().startsWith(searchEmail.toLowerCase())
      );
      setOrdersMatchingEmail(newDisplay);
    }
  }, [searchEmail, orders]);

  let orderItems;
  orderItems = ordersMatchingEmail.map((order) => (
    <OrderCard key={order.id} order={order} showCart={false} />
  ));

  return (
    <div className="orders">
      <div className="orders-content">
        <div className="orders-content-search">
          <input
            type="text"
            placeholder="Enter email"
            value={searchEmail}
            onChange={handleUpdateSearchEmail}
          />
          <button>
            <img
              className="searchIcon"
              alt="magnifying glass"
              src="src/assetts/magnifying-glass.png"
            />
          </button>
        </div>
        <div className="orders-content-grid">{orderItems}</div>
      </div>
    </div>
  );
}
