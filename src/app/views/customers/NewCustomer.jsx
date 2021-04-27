import React, { useState } from "react";
import { Breadcrumb, SimpleCard } from "matx";

import http from "../../services/api";
import { useHistory } from "react-router-dom";
import CustomerForm from "./CustomerForm";

function NewCustomer() {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Customer", path: "/customers" },
            { name: "New Customer" },
          ]}
        />
      </div>
      <SimpleCard title="Create New Customer">
        <CustomerForm isNewCustomer={true}/>
      </SimpleCard>
    </div>
  );
}

export default NewCustomer;
