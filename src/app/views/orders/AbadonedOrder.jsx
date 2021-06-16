import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import MUIDataTable from "mui-datatables";
import { Grow, Icon, IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import http from "../../services/api";
import Moment from "react-moment";
import { getCustomerById } from "../customers/CustomerService";
const AbadonedOrder = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [orders, setOrderList] = useState([]);

  useEffect(() => {
    http.get(`/afrimash/abandoned-orders`).then((response) => {
      console.log(response);
      let { data } = response;
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
                <h5 className="my-0 text-15">{`${order?.referenceNo}`}</h5>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "customer",
      label: "Customer",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <h5 className="my-0 text-muted">
                  {order.customerId.firstName}
                </h5>
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
                <h5 className="my-0 text-muted">
                  {order.deliveryAddress || "-----"}
                </h5>
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
                <h5 className="my-0 text-muted">₦{order.totalPrice}</h5>
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
                <h5 className="my-0 text-muted">
                  <Moment format="YYYY/MM/DD">{order.createDate}</Moment>
                </h5>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "action",
      label: " ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          let order = orders[dataIndex];
          return (
            <div className="flex items-center">
              <div className="flex-grow"></div>

              <Link
                to={{
                  pathname: "/abadoned-order/details",
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
            { name: "Abadoned Orders", path: "/abandoned-orders" },
            { name: "Abadoned Orders" },
          ]}
        />
      </div>
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={"All Abadoned Orders"}
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
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AbadonedOrder;
