import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import GroupList from "./GroupList";

class Groups extends Component {
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Groups", path: "/groups" },
              { name: "Groups" }
            ]}
          />
        </div>
        <SimpleCard title="Groups">
        <GroupList/>
        </SimpleCard>
      </div>
    );
  }
}

export default Groups;
