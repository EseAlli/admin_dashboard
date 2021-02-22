import {MatxLoadable} from "matx";

const Customers = MatxLoadable({
  loader: () => import("./Customers")
});
// const Managers = MatxLoadable({
//   loader: () => import("./Managers")
// });

// const Staff = MatxLoadable({
//   loader: () =>  import("./Staff")
// })

const customerRoutes = [
  {
    path: "/customers",
    component: Customers
  },
//   {
//     path: "/managers",
//     component: Managers
//   },
//   {
//     path: "/staff/",
//     component: Staff
//   }
];

export default customerRoutes;
