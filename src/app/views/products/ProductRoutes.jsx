import {MatxLoadable} from "matx";

const Products = MatxLoadable({
  loader: () => import("./Products")
});
const ProductDetails = MatxLoadable({
  loader: () => import("./ProductDetails")
});

const productRoutes = [
  {
    path: "/products",
    component: Products
  },
  {
    path: "/products/details",
    component: ProductDetails
  }
];

export default productRoutes;
