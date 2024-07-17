import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderProgress from "../../components/OrderProgress";
import {
  mockOrders,
  OrderType,
} from "../../components/orderUpdates/orderUpdates.config";
import "./OneOrderPage.scss";

const OneOrderPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState<OrderType | null>(null);

  useEffect(() => {
    setOrder(mockOrders.find((order) => order.id === orderId) || null);
  }, []);

  if (!order) {
    return (
      <div className="one_order_page__container">
        <p>Order not found</p>
      </div>
    );
  }

  return <OrderProgress order={order} />;
};

export default OneOrderPage;
