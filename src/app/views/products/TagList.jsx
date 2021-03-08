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


const TagList = ({tags, handleSubmit}) => {

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
            <TableCell className="px-0">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tags.map((tag, index) => (
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
                {tag.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {tag.description || "----"}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {tag.slug || "----"}
              </TableCell>
              <TableCell className="px-0">
                {tag.count || " "}   
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TagList;
