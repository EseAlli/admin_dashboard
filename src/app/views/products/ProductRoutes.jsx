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
const EditProduct = MatxLoadable ({
  loader: () => import("./EditProduct")
})
const Tag = MatxLoadable({
  loader : () =>  import("./Tag")
})

const Brand = MatxLoadable({
  loader : () =>  import("./Brand")
})

const Category = MatxLoadable({
  loader: () => import("./Category")
})

const NewCategory = MatxLoadable({
  loader: () =>  import("./NewCategory")
})

const Features = MatxLoadable({
  loader: () => import("./Features")
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
    path: "/product/edit",
    component: EditProduct
  },
  {
    path: "/tags",
    component: Tag
  },
  {
    path: "/brands",
    component: Brand
  },
  {
    path: "/product-categories",
    component: Category
  },
  {
    path: "/product-category/new",
    component: NewCategory
  },
  {
    path: "/features",
    component: Features
  }
];

export default productRoutes;
