import React, { useEffect, useState } from "react";
import { OrderType } from "../orderUpdates/orderUpdates.config";
import "./OrderProgress.scss";

const OrderProgress = ({ order }: { order: OrderType }) => {
  const [progressWidth, setProgressWidth] = useState(0);

  const getStatusIndex = (status: string) => {
    switch (status) {
      case "ordered":
        return 0;
      case "shipped":
        return 1;
      case "out_for_delivery":
        return 2;
      case "delivered":
        return 3;
      default:
        return 0;
    }
  };

  useEffect(() => {
    const targetWidth = (getStatusIndex(order.status) / 3) * 100;
    setProgressWidth(0);
    setTimeout(() => setProgressWidth(targetWidth), 100);
  }, [order.status]);

  return (
    <div className="order-progress-container">
      <h3 className="order-desc">{order.desc}</h3>
      <div className="image-placeholder">
        <img src={order.imgSrc} alt={order.desc} />
      </div>

      <div className="progress-bar">
        <div
          className="progress-line"
          style={{ width: `${progressWidth}%` }}
        ></div>
        {["Ordered", "Shipped", "Out for delivery", "Delivered"].map(
          (status, index) => (
            <div
              key={status}
              className={`status-dot ${
                getStatusIndex(order.status) >= index ? "active" : ""
              }`}
            >
              {getStatusIndex(order.status) >= index && (
                <span className="check-mark">✓</span>
              )}
              <span className="status-text">{status}</span>
            </div>
          )
        )}
      </div>
      <div className="order-updates">
        <p className="title">Latest update</p>
        <p className="status-message">• {order.statusMessage}</p>
      </div>
    </div>
  );
};

export default OrderProgress;
