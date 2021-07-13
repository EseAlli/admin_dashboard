import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import MUIDataTable from "mui-datatables";
import { Grow, Icon, IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import http from "../../services/api";
import Moment from 'react-moment';
const Orders = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [orders, setOrderList] = useState([]);

  useEffect(() => {
    http.get(`/afrimash/orders/search?`).then((response) => {
      let { data } = response;
      console.log(data.object.content)
      if (isAlive) setOrderList(data.object.content);
    });
    return () => setIsAlive(false);
  }, [isAlive]);

  const columns = [
    {
      name: "referenceNo", // field name in the row object
      label: "Order", // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];

          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0 text-15">{`${order?.referenceNo}`}</span>
              </div>
            </div>
          );
        },
      },
    },

    // {
    //   name: "orderItems",
    //   label: "Purchased",
    //   options: {
    //     filter: true,
    //     customBodyRenderLite: (dataIndex) => {
    //       let order = orders[dataIndex];
    //       return (
    //         <div className="flex items-center">
    //           <div className="ml-3">
    //             <span className="my-0">
    //             {order.orderItems.length ? `${order.orderItems.length} items` : "------"}
    //             {/* { `${order.orderItems?.length} items` || "------"} */}
    //             </span>
    //           </div>
    //         </div>
    //       );
    //     },
    //   },
    // },
    {
      name: "status", // field name in the row object
      label: "Status", // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];

          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0 text-15">{`${order?.status}`}</span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "deliveryAddress",
      label: "Billing Address",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0">{order.deliveryAddress || "-----" }</span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "total",
      label: "Gross Sales",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0">
                ₦{ order.totalPrice }
                </span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0">
                <Moment fromNow>{order.createDate}</Moment>
                </span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "seller",
      label: "Seller",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <span className="my-0">
                
                </span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "action",
      label: "Actions",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          return (
            <div className="flex items-center">
              {/* <div className="flex-grow"></div> */}
              
              <Link
                to={{
                  pathname: "/order/details",
                  state: {
                    id: order.id,
                  },
                }}
              >
                <IconButton>
                  <Icon>arrow_right_alt</Icon>
                </IconButton>
              </Link>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Orders", path: "/orders" },
            { name: "Orders" },
          ]}
        />
      </div>
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={"All Orders"}
            data={orders}
            columns={columns}
            options={{
              filterType: "textField",
              responsive: "standard",
              //   selectableRows: "none", // set checkbox for each row
              //   search: false, // set search option
              //   filter: false, // set data filter option
              //   download: false, // set download option
              //   print: false, // set print option
              //   pagination: true, //set pagination option
              //   viewColumns: false, // set column option
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
              customSearchRender: (
                searchText,
                handleSearch,
                hideSearch,
                options
              ) => {
                return (
                  <Grow appear in={true} timeout={300}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={({ target: { value } }) => handleSearch(value)}
                      InputProps={{
                        style: {
                          paddingRight: 0,
                        },
                        startAdornment: (
                          <Icon className="mr-2" fontSize="small">
                            search
                          </Icon>
                        ),
                        endAdornment: (
                          <IconButton onClick={hideSearch}>
                            <Icon fontSize="small">clear</Icon>
                          </IconButton>
                        ),
                      }}
                    />
                  </Grow>
                );
              },
              customToolbar: () => {
                return (
                  <Link
                    to={{
                      pathname: "/order/new",
                      state: {},
                    }}
                  >
                    <IconButton>
                      <Button variant="contained" color="primary">
                        <Icon>add</Icon>Add New
                      </Button>
                    </IconButton>
                  </Link>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Orders;
