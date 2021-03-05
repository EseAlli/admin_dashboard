import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import TagList from "./TagList";
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

class Tag extends Component {
  constructor(props){
    super(props);
    this.state ={
      tags: [],
      isOpen: false
    }

    this.getTag()
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

  getTag = () => {
    http
      .get(`/afrimash/tags/`)
      .then((response) => {
        console.log(response.data.object)
        this.setState({
          tags: response.data.object,
        })
      })
      .catch((err) => {
          this.setState({
              tags:[]
          })
          alert(err.response.data)
      })
  }
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Tag", path: "/tags" },
              { name: "Tag" }
            ]}
          />
        </div>
        <SimpleCard title="All Tags">
       
        <IconButton><Button variant="contained" color="primary" onClick={()=>{this.handleOpen()}}>Create Tag<Icon>add</Icon></Button></IconButton>
         <CreateNew isOpen={this.state.isOpen} handleClose={this.handleClose} name="Create Tag" fields={fields}/> 
        
        <TagList Tag={this.state.tag}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Tag;
