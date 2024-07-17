import React, { useMemo } from "react";
import OrderUpdateItem from "../../components/OrderUpdateItem";
import { mockOrders } from "../../components/orderUpdates/orderUpdates.config";
import "./OrdersPage.scss";

const OrdersPage = () => {
  const orders = useMemo(() => {
    return mockOrders.map((order, idx) => (
      <div key={order.id + idx} className="orders-page__order">
        <OrderUpdateItem order={order} />
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
