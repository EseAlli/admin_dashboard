import {MatxLoadable} from "matx";

const Products = MatxLoadable({
  loader: () => import("./Products")
});
const ProductDetails = MatxLoadable({
  loader: () => import("./ProductDetails")
});
const NewProduct = MatxLoadable ({
  loader: () => import("./NewProduct")
})

const productRoutes = [
  {
    path: "/products",
    component: Products
  },
  {
    path: "/product/details",
    component: ProductDetails
  },
  {
    path: "/product/new",
    component: NewProduct
  }
];

export default productRoutes;
