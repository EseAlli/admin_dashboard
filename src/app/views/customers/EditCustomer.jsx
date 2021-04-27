import React, { useState } from "react";
import { Breadcrumb, SimpleCard } from "matx";

import http from "../../services/api";
import { useHistory } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function EditCustomer({location}) {
    let {id, user} = location.state
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Customer", path: "/customer/edit" },
            { name: "Edit Customer" },
          ]}
        />
      </div>
      <SimpleCard title={` Edit ${user.firstName} ${user.lastName}`}>
        <CustomerForm isNewCustomer={false} id={id} Customer={user}/>
      </SimpleCard>
    </div>
  );
}

export default EditCustomer;
