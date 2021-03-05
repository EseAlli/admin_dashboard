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


const TagList = ({tags}) => {

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

            <TableCell className="px-0">Date</TableCell>
            <TableCell className="px-0"></TableCell>
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
              <TableCell className="px-0 capitalize" align="left">
                <img style={{width: "50%"}} src={tag.image} alt="Product Image"/>
              </TableCell>
              <TableCell className="px-0 capitalize">
                {tag.name}
              </TableCell>
              <TableCell className="px-0 capitalize" align="left">
                {tag.sku}
              </TableCell>
              <TableCell className="px-0">
              <IconButton>
                  <Icon color="success">create</Icon>
                </IconButton>    
              <Link
                to={{
                  pathname: '/tag/details',
                  state: {
                    direct: 'tag',
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

export default TagList;
