import * as React from "react";
import "./Orders.css";
import { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="orders">
      <div className="orders-content"></div>
    </div>
  );
}
