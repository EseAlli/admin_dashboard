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


const ProductList = ({products}) => {

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
            <TableCell className="px-0">Name</TableCell>
            <TableCell className="px-0" align="center">SKU</TableCell>
            {/* <TableCell className="px-0">Status</TableCell> */}
            {/* <TableCell className="px-0">Stock</TableCell> */}
            <TableCell className="px-0">Price</TableCell>
            {/* <TableCell className="px-0">Date</TableCell> */}
            <TableCell className="px-0">Seller</TableCell>
            <TableCell className="px-0"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>
              <Checkbox
                value="checked"
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            </TableCell>
              <TableCell className="px-0 capitalize">
                {product.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="center">
                {product.sku || "-----"}
              </TableCell>
              {/* <TableCell className="px-0 capitalize">
                {product.status}
              </TableCell> */}
              <TableCell className="px-0 capitalize">
                ₦{product.price}
              </TableCell>
              <TableCell className="px-0 capitalize">
                {product.storeId.sellerId.name}
              </TableCell>
              <TableCell className="px-0">
              <Link 
                to={{
                  pathname: '/product/edit',
                  state:{
                    productId: product.id
                  }
                }}
              >
                <IconButton>
                  <Icon color="success">create</Icon>
                </IconButton>    
              </Link>
              
              <Link
                to={{
                  pathname: '/product/details',
                  state: {
                    direct: 'product',
                    productId: product.id
                    }
                  }}
              >
                <IconButton>
                  <Icon color="success">open_in_new</Icon>
                </IconButton>                    
              </Link>
                {/* <IconButton>
                  <Icon color="success">delete</Icon>
                </IconButton>      */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
