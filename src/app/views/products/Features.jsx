import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import FeatureList from "./FeatureList";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button
} from "@material-ui/core";
import { Link } from 'react-router-dom/cjs/react-router-dom';
import CreateNew from "./CreateNew"

const fields = [
    "Name",
    "Feature Type",
]

class Features extends Component {
  constructor(props){
    super(props);
    this.state ={
      features: [],
      isOpen: false
    }

    this.getFeatures()
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

    getFeatures = () => {
        http
        .get(`/afrimash/features`)
        .then((response) => {
            console.log(response.data)
            this.setState({
            features: response.data.object,
            })
        })
        .catch((err) => {
            this.setState({
                features:[]
            })
            alert(err.response.data)
        })
    }

     handleSubmit = (state) => {
      http
        .post("/afrimash/features", state)
        .then((response)=>{
           if (response.status === "OK"){  
               this.props.history.push("/features")
           }else if(response.data.errorMsg !== null) {
               return
           }
        })
    }

    
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Features", path: "/features" },
              { name: "Features" }
            ]}
          />
        </div>
        <SimpleCard title="All Features">
       
        <IconButton><Button variant="contained" color="primary" onClick={()=>{this.handleOpen()}}>Create New Features<Icon>add</Icon></Button></IconButton>
         <CreateNew onSubmit={this.handleSubmit} isOpen={this.state.isOpen} handleClose={this.handleClose} name="Create Feature" fields={fields}/> 
       
        <FeatureList categories={this.state.categories}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Features;
