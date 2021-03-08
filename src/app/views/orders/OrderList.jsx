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


const OrderList = ({orders}) => {
  return (
    <div className="w-100 overflow-auto">
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0">Order</TableCell>
            <TableCell className="px-0">Purchased</TableCell>
            <TableCell className="px-0">Billing Address</TableCell>
            <TableCell className="px-0">Shipping Address</TableCell>
            <TableCell className="px-0">Gross Sales</TableCell>
            <TableCell className="px-0">Admin Fee</TableCell>
            <TableCell className="px-0">Date</TableCell>
            <TableCell className="px-0">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {order.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {order.company}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {order.date}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {order.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${order.amount}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${order.amount}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${order.amount}
              </TableCell>
              <TableCell className="px-0">
              <Link
                to={{
                  pathname: '/order/details',
                  state: {
                    direct: 'shipment',
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">open_in_new</Icon>
                </IconButton> 
                <IconButton>
                  <Icon color="success">create</Icon>
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
