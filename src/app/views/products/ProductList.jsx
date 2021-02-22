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
import Checkbox from "@material-ui/core/Checkbox";

const subscribarList = [
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
    name: "john doe",
    date: "18 january, 2019",
    amount: 1000,
    status: "close",
    company: "ABC Fintech LTD."
  },
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
    name: "kessy bryan",
    date: "10 january, 2019",
    amount: 9000,
    status: "open",
    company: "My Fintech LTD."
  },
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
    name: "james cassegne",
    date: "8 january, 2019",
    amount: 5000,
    status: "close",
    company: "Collboy Tech LTD."
  },
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
    name: "lucy brown",
    date: "1 january, 2019",
    amount: 89000,
    status: "open",
    company: "ABC Fintech LTD."
  },
  {
    image: "http://matx-react.ui-lib.com/assets/images/products/headphone-2.jpg",
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
            <TableCell>
              <Checkbox
                value="checked"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </TableCell>
            <TableCell className="px-0">
              <Icon color="success">photo</Icon>
            </TableCell>
            <TableCell className="px-0">Name</TableCell>
            <TableCell className="px-0">SKU</TableCell>
            <TableCell className="px-0">Status</TableCell>
            <TableCell className="px-0">Stock</TableCell>
            <TableCell className="px-0">Price</TableCell>
            <TableCell className="px-0">Taxonomies</TableCell>
            <TableCell className="px-0">Date</TableCell>
            <TableCell className="px-0">Seller</TableCell>
            <TableCell className="px-0"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList.map((subscriber, index) => (
            <TableRow key={index}>
              <TableCell>
              <Checkbox
                value="checked"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                <img style={{width: "50%"}} src={subscriber.image} alt="Product Image"/>
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {subscriber.company}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                ${subscriber.amount}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {subscriber.status}
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
              </Link>
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

export default OrderList;
