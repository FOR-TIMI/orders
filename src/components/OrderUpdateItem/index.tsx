import React from "react";
import { Link } from "react-router-dom";
import { OrderType } from "../orderUpdates/orderUpdates.config";
import "./OrderUpdateItem.scss";

interface OrderUpdateItemProps {
  order: OrderType;
}

const OrderUpdateItem: React.FC<OrderUpdateItemProps> = React.memo(
  ({ order }) => {
    const { desc, id, imgSrc, status, statusMessage } = order;

    return (
      <Link to={`/orders/${id}`} className="order-updates__container">
        <div className="order-updates__img-container">
          <img src={imgSrc} alt={desc} loading="lazy" />
        </div>
        <div className="order-updates-text-container">
          <p className="order-updates__title">{desc}</p>
          {status === "cancelled" && <p>Cancelled</p>}
          <p className={`order-updates__status ${status}`}>{statusMessage}</p>
        </div>
      </Link>
    );
  }
);

OrderUpdateItem.displayName = "OrderUpdateItem";

export default OrderUpdateItem;
