import React, { useMemo } from "react";
import { mockOrders } from "../../components/orderUpdates/orderUpdates.config";
import "./OrdersPage.scss";

const OrdersPage = () => {
  const orders = useMemo(() => {
    return mockOrders.map(({ desc, id, imgSrc, productId, status }, idx) => (
      <div className="ordersPage__order" key={id + idx + productId}>
        <div className="ordersPage__order-img-container">
          <img src={imgSrc} alt={desc} />
        </div>
        <div className="ordersPage__order-text-container">
          <p className="ordersPage__order-desc">{desc}</p>
          <p className="ordersPage__order-status">{status}</p>
        </div>
      </div>
    ));
  }, []);

  return (
    <div className="ordersPage__container">
      <div className="ordersPage__container-title-container">
        <h3 className="ordersPage__container-title-container-title">
          Past orders
        </h3>
      </div>
      {orders}
    </div>
  );
};

export default React.memo(OrdersPage);
