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
const Tag = MatxLoadable({
  loader : () =>  import("./Tag")
})

const Brand = MatxLoadable({
  loader : () =>  import("./Brand")
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
  },
  {
    path: "/tags",
    component: Tag
  },
  {
    path: "/brands",
    component: Brand
  },
];

export default productRoutes;
