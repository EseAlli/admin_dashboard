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


const CategoryList = ({categories, handleSubmit}) => {

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
            <TableCell className="px-0">Description</TableCell>
            <TableCell className="px-0">Slug</TableCell>
            <TableCell className="px-0">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
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
                <img style={{width: "50%"}} src={category.image} alt="Image"/>
              </TableCell>
              <TableCell className="px-0 capitalize">
                {category.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {category.description || "----"}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {category.slug || "----"}
              </TableCell>
              <TableCell className="px-0">
                {category.count || " "}   
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryList;
