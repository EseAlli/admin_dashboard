import React, { useState, useEffect } from "react";
import { Breadcrumb } from "matx";
import MUIDataTable from "mui-datatables";
import { Grow, Icon, IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import http from "../../services/api";
import CreateNew from "./CreateNew";
import { makeStyles } from "@material-ui/core/styles";

const fields = ["name", "featureType"];

const Features = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [features, setFeatures] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    http.get(`/afrimash/features/`).then((response) => {
      let { data } = response;
      if (isAlive) setFeatures(data.object);
    });
    return () => setIsAlive(false);
  }, [isAlive]);

  const handleModal = () => {
    setOpen(!open);
  };

  const submit = (state) => {
    let feature_type = state.featureType;
    let featureType = feature_type.toUpperCase();
    let tempState = { ...state, featureType: featureType };
    return http.post("/afrimash/features", tempState);
  };

  const columns = [
    {
      name: "name", // field name in the row object
      label: "Name", // column title that will be shown in table
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let feature = features[dataIndex];

          return (
            <div className="flex items-center">
              <div className="ml-3">
                <h5 className="my-0 text-15">{`${feature?.name}`}</h5>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let feature = features[dataIndex];
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <h5 className="my-0 text-15">
                  {" "}
                  {feature.description || "-----"}
                </h5>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "featureType",
      label: "Feature Type",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => {
          let feature = features[dataIndex];
          return (
            <div className="flex items-center">
              <div className="ml-3">
                <h5 className="my-0 text-15">
                  {" "}
                  {feature.featureType || "-----"}
                </h5>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "action",
      label: "Actions ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => {
          let feature = features[dataIndex];
          return (
            <div className="flex items-center">
              <div className="flex-grow"></div>
              {/* <IconButton
                variant="contained"
                color="primary"
                onClick={() => {
                  handleModal();
                }}
              >
                <Icon>edit</Icon>
              </IconButton> */}

              <IconButton>
                <Icon>delete</Icon>
              </IconButton>
            </div>
          );
        },
      },
    },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb routeSegments={[{ name: "Features", path: "/features" }]} />
      </div>
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={"Features"}
            data={features}
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
                  <>
                    <IconButton>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          handleModal();
                        }}
                      >
                        <Icon>add</Icon>Add New
                      </Button>
                    </IconButton>
                    <CreateNew
                      states={features}
                      isOpen={open}
                      handleClose={handleModal}
                      name="Create Feature"
                      fields={fields}
                      onSubmit={submit}
                    />
                  </>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
