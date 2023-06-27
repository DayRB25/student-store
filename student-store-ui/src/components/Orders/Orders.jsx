import * as React from "react";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../OrderCard/OrderCard";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/orders");
        setOrders(res.data.orders);
      } catch (err) {}
    };
    fetchOrders();
  }, []);

  const orderItems = orders.map((order) => (
    <OrderCard key={order.id} order={order} showCart={false} />
  ));

  return (
    <div className="orders">
      <div className="orders-content">{orderItems}</div>
    </div>
  );
}
