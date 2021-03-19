import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button,
  TextField,
  MenuItem, 
  FormControl,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const status = [
    "PENDING",
    "ON HOLD",
    "COMPLETED",
    "CANCELLED",
    "REFUNDED",
    "FAILED",
    "PROCESSING"
]


class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order : [],
            status: [],
            orderItems: []
        }
       
    }  

    componentDidMount (){
        this.getOrder()
    }

    getOrder = () =>{
        const id = this.props.location.state.id
        http.get(`/afrimash/orders/${id}`)
        .then((response)=> { 
            const {object} = response.data
            console.log(object.orderItems)
            this.setState({
                order: object,
                status: object.status,
                orderItems: object.orderItems
            })
        })
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Orders", path: "/orders" },
              { name: "Order Details" }
            ]}
          />
        </div>
        <SimpleCard title="Order Details">
            <p>Order Date : </p>
            <div>
               <TextField
                    onChange={this.handleChange}
                    value={this.state.status}
                    name="status"
                    select
                    label="Order Status"
                    margin="dense"
                    type="text"
                    variant="outlined" 
                >
                    {status.map(status => (
                        <MenuItem name="status" defaultValue={this.state.status} value={status}>{status}</MenuItem>
                    ))}
                </TextField> 
                <Button  variant="contained" color="primary">Update</Button>
            </div>
            <div>
                Customer : 
            </div>
            <FormControl>
            </FormControl>
        </SimpleCard>
        <br/>
        <SimpleCard title ="Order Details">
            <Table style={{ whiteSpace: "pre"}}>
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0" >Item</TableCell>
                        <TableCell className="px-0" >Cost</TableCell>
                        <TableCell className="px-0" >Quantity</TableCell>
                        <TableCell className="px-0" >Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        this.state.orderItems.map((orderItem) =>(
                            <TableRow>
                                <TableCell>{orderItem.productId.name}</TableCell>
                                <TableCell>{orderItem.itemPrice}</TableCell>
                                <TableCell>x{orderItem.itemQuantity}</TableCell>
                                <TableCell>{orderItem.totalPrice}</TableCell>
                            </TableRow>
                        ))
                    }
               
                    <TableRow >
                        <TableCell align="right" rowSpan={6} colSpan={3} />
                        <p>Discount: ₦30000 </p>
                        <p>Shipping:  ₦30000</p>
                        <p>Store Credit Used: ₦30000 </p> 
                        <p>Order Total: ₦30000 </p>
                        <p>Vendor(s) Earning: ₦30000 </p>
                        <p>Admin Fee: ₦30000</p>
                    </TableRow>
                </TableBody>
            </Table>
          
        </SimpleCard>
        <br/>
        <SimpleCard title="Shipment Tracking">
            <h2>Mark item(s) as shipped and provide tracking information</h2>
        </SimpleCard>
      </div>
    );
  }
}

export default OrderDetails;
