import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import ProductList from "./ProductList";
import http from "../../services/api"

class Products extends Component {
  constructor(props){
    super(props);
    this.state ={
      products: []
    }

    this.getProducts()
  }

  getProducts = () => {
    http
      .get(`/afrimash/products/`)
      .then((response) => {
        console.log(response.data.object)
        this.setState({
          products: response.data.object,
        })
      })
      .catch((err) => alert(err.response.data))
  }
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
        <ProductList products={this.state.products}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Products;
