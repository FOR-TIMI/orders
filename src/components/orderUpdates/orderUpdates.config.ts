type OrderStatus = "pending" | "cancelled" | "delivered";

interface BaseOrderType {
  imgSrc: string;
  desc: string;
  id: string;
  status: OrderStatus;
  productId: string;
  statusMessage?: string;
}

interface CancelledOrderType extends BaseOrderType {
  status: "cancelled";
  refundStatus: "pending" | "refunded";
}

interface PendingOrderType extends BaseOrderType {
  status: "pending";
}

interface DeliveredOrderType extends BaseOrderType {
  status: "delivered";
}

export type OrderType =
  | CancelledOrderType
  | PendingOrderType
  | DeliveredOrderType;

export const mockOrders: OrderType[] = [
  {
    imgSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b8bf7a23b77440c7a84aad440038451b_9366/Relaxed_Strap-Back_Hat_Green_FZ8489_01_standard.jpg",
    desc: "Green Hat",
    id: "io90asc",
    status: "pending",
    productId: "1",
    statusMessage: "Waiting for details",
  },
  {
    imgSrc:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5c6737700a364600b6d22f08011b1035_9366/Field_Issue_Essentials_Hoodie_Brown_IY2290_25_model_hover.jpg",
    desc: "Brown Hoodie",
    id: "zxzed21",
    status: "cancelled",
    refundStatus: "pending",
    statusMessage: "Pending Refund",
    productId: "2",
  },
  {
    imgSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5edc475-2201-4294-b86b-e59fb64d8ce0/air-jordan-1-elevate-low-shoes-QpxBzG.png",
    desc: "Blue Sneakers",
    id: "zddr32s",
    statusMessage: "Delivered",
    status: "delivered",
    productId: "3",
  },
];
