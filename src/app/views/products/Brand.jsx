import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import BrandList from "./BrandList";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import CreateNew from "./CreateNew"

const fields = [
    "Name"
]

class Brand extends Component {
  constructor(props){
    super(props);
    this.state ={
      brands: [],
      isOpen: false
    }

    this.getBrands()
  }

   handleOpen = () => {
        this.setState({
        isOpen: true
        })
    }

    handleClose = () => {
        this.setState({
        isOpen: false
        })
    }

  getBrands = () => {
    http
      .get(`/afrimash/brands/`)
      .then((response) => {
        console.log(response.data.object)
        this.setState({
          brands: response.data.object,
        })
      })
      .catch((err) => alert(err.response.data))
  }
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Brand", path: "/brands" },
              { name: "Brand" }
            ]}
          />
        </div>
        <SimpleCard title="All Brands">
       
        <IconButton><Button variant="contained" color="primary" onClick={()=>{this.handleOpen()}}>Create New Brand<Icon>add</Icon></Button></IconButton>
         <CreateNew isOpen={this.state.isOpen} handleClose={this.handleClose} name="Create Brand" fields={fields}/> 
        
        <BrandList Brand={this.state.brands}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Brand;
