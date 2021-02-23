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

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD."
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD."
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  }
];

const OrderList = () => {
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
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.company}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.date}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${subscriber.amount}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${subscriber.amount}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${subscriber.amount}
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
                <IconButton>
                  <Icon color="success">check</Icon>
                </IconButton>
                <IconButton>
                  <Icon color="success">insert_drive_file</Icon>
                </IconButton>                               
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
