import {MatxLoadable} from "matx";

const Orders = MatxLoadable({
  loader: () => import("./Orders")
});
const OrderDetails = MatxLoadable({
  loader: () => import("./OrderDetails")
});

const orderRoutes = [
  {
    path: "/orders",
    component: Orders
  },
  {
    path: "/order/details",
    component: OrderDetails
  }
];

export default orderRoutes;
