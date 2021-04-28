import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { SimpleCard } from "matx";
import { getSellerById } from "./SellerService";

const SellerInfo = ({ id }) => {
  const [state, setState] = useState([]);
  console.log(id);
  useEffect(() => {
    getSellerById(id).then(({ data }) => {
      console.log(data.object);
      setState(data.object);
      console.log(state);
    });
  }, [id]);

  return (
    <SimpleCard className="pt-6">
      <div className="flex-column items-center mb-6">
        <h5 className="mt-4 mb-2">{state.name}</h5>
      </div>

      <Divider />
      <Table className="mb-4">
        <TableBody>
          <TableRow>
            <TableCell className="pl-4">Email</TableCell>
            <TableCell>
              <div>{state.email}</div>
            </TableCell>
          </TableRow>
          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell className="pl-4">{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </SimpleCard>
  );
};

const customerInfo = [
  {
    title: "Phone",
    value: "+1 439 327 546",
  },
  {
    title: "Country",
    value: "USA",
  },
  {
    title: "State/Region",
    value: "New York",
  },
  {
    title: "Address 1",
    value: "Street Tailwood, No. 17",
  },
  {
    title: "Address 2",
    value: "House #19",
  },
];

export default SellerInfo;
