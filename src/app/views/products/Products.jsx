import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import ProductList from "./ProductList";

class Products extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Products", path: "/products" },
              { name: "Products" }
            ]}
          />
        </div>
        <SimpleCard title="All Products">
        <ProductList/>
        </SimpleCard>
      </div>
    );
  }
}

export default Products;
