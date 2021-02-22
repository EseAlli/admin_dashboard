import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import StaffList from "./StaffList";

class Staff extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Staff", path: "/staff" },
              { name: "Staff" }
            ]}
          />
        </div>
        <SimpleCard title="Staff">
        <StaffList/>
        </SimpleCard>
      </div>
    );
  }
}

export default Staff;
