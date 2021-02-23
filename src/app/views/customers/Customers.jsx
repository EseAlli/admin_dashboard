import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import CustomersList from "./CustomersList";
import http from "../../services/api"

class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers : []
        }

       this.getCustomers()
       
    }

    getCustomers = () =>{
        http.get(`/afrimash/customers`)
        .then((response)=> {
            this.setState({
                customers: response.data.object
            })
        })
    }

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
        <CustomersList customers={this.state.customers}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Customers;
