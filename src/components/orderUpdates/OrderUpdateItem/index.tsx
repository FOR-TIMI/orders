import React from "react";
import { Link } from "react-router-dom";
import { OrderType } from "../orderUpdates.config";
import "./OrderUpdateItem.scss";

interface OrderUpdateItemProps {
  order: OrderType;
}

const OrderUpdateItem: React.FC<OrderUpdateItemProps> = ({ order }) => {
  const { desc, id, imgSrc, status } = order;
  let statusMessage = "";

  switch (status) {
    case "pending":
      statusMessage = "Waiting for details";
      break;
    case "cancelled":
      statusMessage =
        (order as any).refundStatus === "pending"
          ? "Pending Refund"
          : "Refunded";
      break;
    case "delivered":
      statusMessage = "Delivered";
      break;
    default:
      statusMessage = "Unknown status";
  }

  return (
    <Link to={`/orders/${id}`} key={id} className="order-updates__container">
      <div className="order-updates__img-container">
        <img src={imgSrc} alt={desc} />
      </div>
      <div className="order-updates-text-container">
        <p className="order-updates__title">{desc}</p>
        {status === "cancelled" && <p className="">Cancelled</p>}
        <p className={`order-updates__status ${status}`}>{statusMessage}</p>
      </div>
    </Link>
  );
};

export default OrderUpdateItem;
