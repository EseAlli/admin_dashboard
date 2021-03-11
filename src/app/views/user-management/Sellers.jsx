import React, {useState, useEffect} from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  Button,
  TableRow
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import http from "../../services/api";
import { Breadcrumb, SimpleCard } from "matx";
import Checkbox from "@material-ui/core/Checkbox";


const fields = [
  "Username",
  "Email",
  "Name",
	"Phone Number",
	"State"
]



const Sellers = () => {
 const [sellers, setSellers] = useState([])

  const getSeller = () =>{
        http.get(`/afrimash/sellers/search?`)
        .then((response)=> {
          console.log(response.data.object.content)
          let sellers = response.data.object.content
           setSellers(sellers)
        })
    }

  useEffect(() => {
    getSeller()   
  }, [])
  return (
    <div className="m-sm-30">
    <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Sellers", path: "/vendors" },
              { name: "Sellers" }
            ]}
          />
    </div>
    <SimpleCard title="Sellers">
    <Link
                to={{
                  pathname: '/vendor/new',
                  state: {
                    from: 'sellers',
                    method: 'post'
                    }
                  }}
              >
        <IconButton><Button variant="contained" color="primary" ><Icon>add</Icon>Add New</Button></IconButton></Link>
    <div className="w-100 overflow-auto">
      
      <Table style={{ whiteSpace: "pre" }}>
        <TableHead>
          <TableRow>
            {/* <TableCell className="px-0">Verification</TableCell> */}
            <TableCell className="px-0 ">Profile</TableCell>
            <TableCell className="px-0">Store</TableCell>
            {/* <TableCell className="px-0">Membership</TableCell> */}
            <TableCell className="px-0">Gross Sales</TableCell>
            {/* <TableCell className="px-0">Total Fees</TableCell> */}
            <TableCell className="px-0" align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellers.map((seller, index) => (
            <TableRow key={index}>
              {/* <TableCell className="px-0 capitalize">
                {seller.name}
              </TableCell> */}
              <TableCell className="px-0" align="left">
                <div>{seller.name}</div>
                <div>{seller.email}</div>
                <div>{seller.mobileNo}</div>
                <div>{seller.address}</div>

              </TableCell>
              <TableCell className="px-0 capitalize">
                {seller.name}
              </TableCell>
              {/* <TableCell className="px-0 capitalize">
                {seller.status}
              </TableCell> */}
              {/* <TableCell className="px-0 capitalize">
                ${seller.amount}
              </TableCell> */}
              <TableCell className="px-0 capitalize">
                {!seller.walletBalance ? "------------" : seller.walletBalance}
              </TableCell>
              {/* <TableCell className="px-0 capitalize">
                {seller.status}
              </TableCell> */}
              <TableCell className="px-0 capitalize" align="center">
                <IconButton>
                  <Icon color="success">open_in_new</Icon>
                </IconButton>      
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </SimpleCard>
</div>
  );
};

export default Sellers;
