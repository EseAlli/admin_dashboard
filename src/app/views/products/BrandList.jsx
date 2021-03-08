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


const BrandList = ({brands}) => {

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
            <TableCell className="px-0">Description</TableCell>
            <TableCell className="px-0">Slug</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brands.map((brand, index) => (
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
                {brand.name}
              </TableCell>
              <TableCell className="px-0 capitalize" >
                {brand.description || "----"}
              </TableCell>
              <TableCell className="px-0">
              {brand.slug || "----"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BrandList;
