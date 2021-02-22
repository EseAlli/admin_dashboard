import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import OrderList from "./OrderList";

class Orders extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Orders", path: "/orders" },
              { name: "Orders" }
            ]}
          />
        </div>
        <SimpleCard title="All Orders">
        <OrderList />
        </SimpleCard>
      </div>
    );
  }
}

export default Orders;
