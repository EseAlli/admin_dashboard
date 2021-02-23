import {MatxLoadable} from "matx";

const Withdrawal = MatxLoadable({
  loader: () => import("./Withdrawal")
});

const Coupons = MatxLoadable({
  loader: () => import("./Coupons")
});

const Refunds = MatxLoadable({
    loader: () => import("./Refunds")
})

const paymentAndFulfilmentRoutes = [
  {
    path: "/withdrawal",
    component: Withdrawal
  },
  {
    path: "/coupons",
    component: Coupons
  },
  {
      path: "/refund_requests",
      component: Refunds
  }
  
];

export default paymentAndFulfilmentRoutes;
