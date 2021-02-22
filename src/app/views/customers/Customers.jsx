import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import CustomersList from "./CustomersList";
// import http from "../../services/api"

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers : []
        }

       
       
    }

    // getCustomers = () =>{
    //     http.get(`/afrimash/users`)
    //     .then((response)=> {
    //         this.setState({
    //             customer: response.data.data
    //         })
    //     })
    // }

  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Customers", path: "/customers" },
              { name: "Customers" }
            ]}
          />
        </div>
        <SimpleCard title="Customers">
        <CustomersList />
        </SimpleCard>
      </div>
    );
  }
}

export default Customers;
