import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Moment from 'react-moment';


const OrderList = ({orders}) => {
  return (
    <div className="w-100 overflow-auto">
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0">Order</TableCell>
            <TableCell className="px-0">Purchased</TableCell>
            <TableCell className="px-0">Billing Address</TableCell>
            {/* <TableCell className="px-0">Shipping Address</TableCell> */}
            <TableCell className="px-0">Gross Sales</TableCell>
            {/* <TableCell className="px-0">Admin Fee</TableCell> */}
            <TableCell align="right" className="px-0">Date</TableCell>
            <TableCell className="px-0" align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {order.referenceNo}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {order.orderItems.length} items
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {order.deliveryAddress || "-----" }
              </TableCell>
              
              <TableCell className="px-0 capitalize">
                ₦{ order.totalPrice }
              </TableCell>
              {/* <TableCell className="px-0 capitalize">
                ${order.amount}
              </TableCell> */}
              <TableCell align="right" className="px-0 capitalize">
                <Moment format="YYYY/MM/DD">{order.createDate}</Moment>
              </TableCell>
              <TableCell align="right" className="px-0">
              <Link 
                to={{
                  pathname: '/order/details',
                  state: {
                      id: order.id
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">launch</Icon>
                </IconButton>
                {/* <IconButton>
                  <Icon color="success">check</Icon>
                </IconButton>
                <IconButton>
                  <Icon color="success">insert_drive_file</Icon>
                </IconButton>                                */}
              </Link>
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderList;
