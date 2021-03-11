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


const CustomersList = ({customers}) => {
  return (
    <div className="w-100 overflow-auto">
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            <TableCell className="px-0" align="left">Name</TableCell>
            <TableCell className="px-0" align="left">Username</TableCell>
            <TableCell className="px-0" align="center">Email</TableCell>
            <TableCell className="px-0" align="right">Location</TableCell>
            {/* <TableCell className="px-0">Orders</TableCell>  */}
            {/* <TableCell className="px-0">Money Spent</TableCell> */}
            {/* <TableCell className="px-0">Last Order</TableCell> */}
            <TableCell className="px-0" align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {customer.firstName}
              </TableCell>
              <TableCell className="px-0" align="left">
                {customer.user.username}
              </TableCell>
              <TableCell className="px-0 " align="center">
                {customer.email}
              </TableCell>
              
              <TableCell className="px-0 capitalize" align="right">
                {`${customer.state}, ${customer.country}`}
              </TableCell>
              {/* <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell> */}
              {/* <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell> */}

              <TableCell className="px-0" align="right">
                <Link
                to={{
                  pathname: '/customer/details',
                  state: {
                      from: 'customers',
                      firstName: customer.firstName,
                      lastName: customer.lastName,
                      email: customer.email,
                      username: customer.user.username,
                      currState: customer
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">open_in_new</Icon>
                </IconButton>                    
              </Link>
                <Link
                to={{
                  pathname: '/customer/edit',
                  state: {
                      from: 'customers',
                      method: 'put',
                      currState: customer
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">edit</Icon>
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

export default CustomersList;
