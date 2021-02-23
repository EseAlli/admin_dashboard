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
            <TableCell className="px-0">Name</TableCell>
            <TableCell className="px-0">Username</TableCell>
            <TableCell className="px-0">Email</TableCell>
            <TableCell className="px-0">Seller</TableCell>
            <TableCell className="px-0">Location</TableCell>
            <TableCell className="px-0">Orders</TableCell>
            <TableCell className="px-0">Money Spent</TableCell>
            <TableCell className="px-0">Last Order</TableCell>
            <TableCell className="px-0"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {customer.firstName}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {customer.user.username}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {customer.email}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {customer.status}
              </TableCell>
              <TableCell className="px-0">
                <Link
                to={{
                  pathname: '/customer/details',
                  state: {
                      direct: 'customers',
                      name: customer.name,
                      image: customer.image,
                      company: customer.company
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">open_in_new</Icon>
                </IconButton>                    
              </Link>
                <IconButton>
                  <Icon color="success">edit</Icon>
                </IconButton> 
                <IconButton>
                  <Icon color="success">delete</Icon>
                </IconButton>  
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersList;
