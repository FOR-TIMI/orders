import React, { memo } from "react";
import { Link } from "react-router-dom";
import OrderUpdateItem from "../OrderUpdateItem";
import "./OrderUpdates.scss";
import { mockOrders } from "./orderUpdates.config";

const OrderUpdates = () => {
  const [order1, order2] = mockOrders;

  return (
    <div className="order__updates__container">
      <div className="order__updates__text-container">
        <h3>Order updates</h3>
        <Link to="/orders" className="orders__btn">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.868 8.11807C13.2098 7.77627 13.2098 7.22119 12.868 6.8794L8.49297 2.50439C8.15117 2.1626 7.59609 2.1626 7.2543 2.50439C6.9125 2.84619 6.9125 3.40127 7.2543 3.74307L10.1391 6.6251H1.75C1.26602 6.6251 0.875 7.01611 0.875 7.5001C0.875 7.98408 1.26602 8.3751 1.75 8.3751H10.1363L7.25703 11.2571C6.91523 11.5989 6.91523 12.154 7.25703 12.4958C7.59883 12.8376 8.15391 12.8376 8.4957 12.4958L12.8707 8.1208L12.868 8.11807Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
      <div className="order__updates-items">
        {[order1, order2].map((order) => (
          <OrderUpdateItem key={order.id} order={order} />
        ))}
        <Link to="/orders" className="order__updates-button">
          <button>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7063 9.0084C15.0969 8.61777 15.0969 7.9834 14.7063 7.59277L9.70625 2.59277C9.31563 2.20215 8.68125 2.20215 8.29063 2.59277C7.9 2.9834 7.9 3.61777 8.29063 4.0084L11.5875 7.30215H2C1.44687 7.30215 1 7.74902 1 8.30215C1 8.85527 1.44687 9.30215 2 9.30215H11.5844L8.29375 12.5959C7.90312 12.9865 7.90312 13.6209 8.29375 14.0115C8.68437 14.4021 9.31875 14.4021 9.70938 14.0115L14.7094 9.01152L14.7063 9.0084Z"
                fill="black"
              />
            </svg>
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default memo(OrderUpdates);
