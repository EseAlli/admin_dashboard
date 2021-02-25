import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import CustomersList from "./CustomersList";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';


class Customers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers : []
        }

       this.getCustomers()
       
    }

     handleOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
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
        <Link
                to={{
                  pathname: '/customer/new',
                  state: {
                    from: 'customers',
                    method: 'post'
                    }
                  }}
              >
        <IconButton><Button variant="contained" color="primary" ><Icon>add</Icon>Add New</Button></IconButton></Link>
        <CustomersList customers={this.state.customers}/>
        
        </SimpleCard>
      </div>
    );
  }
}

export default Customers;
