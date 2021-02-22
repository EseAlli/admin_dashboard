import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import ManagerList from "./ManagerList";

class Manager extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Manager", path: "/manager" },
              { name: "Manager" }
            ]}
          />
        </div>
        <SimpleCard title="Managers">
        <ManagerList/>
        </SimpleCard>
      </div>
    );
  }
}

export default Manager;
