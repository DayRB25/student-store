import * as React from "react";
import "./Order.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import OrderCard from "../OrderCard/OrderCard";

export default function Order() {
  const [order, setOrder] = useState(null);

  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/orders/${id}`, {
          params: { orderId: id },
        });
        setOrder(res.data.order);
      } catch (err) {}
    };
    fetchOrder();
  }, [id]);

  return (
    <div className="order">
      <div className="order-content">
        {order !== null && <OrderCard order={order} showCart={true} />}
      </div>
    </div>
  );
}
