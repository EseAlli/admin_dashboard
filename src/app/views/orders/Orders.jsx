import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import OrderList from "./OrderList";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Orders extends Component {
  constructor(props) {
        super(props);
        this.state = {
            orders : [],
            payment: []
        }
       
    }

    componentDidMount(){
      this.getOrders()
      
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

    getOrders = () =>{
        http.get(`/afrimash/orders`)
        .then((response)=> {
            this.setState({
                orders: response.data.object,
            })
            console.log(this.state.payment)
        })
    }
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
        <Link
                to={{
                  pathname: '/order/new',
                  state: {
                    from: 'orders',
                    method: 'post'
                    }
                  }}
              >
        <IconButton><Button variant="contained" color="primary" ><Icon>add</Icon>Add New</Button></IconButton></Link>
        <OrderList orders={this.state.orders} />
        </SimpleCard>
      </div>
    );
  }
}

export default Orders;
