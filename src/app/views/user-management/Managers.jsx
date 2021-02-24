import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import ManagerList from "./ManagerList";
import {
  IconButton,
  Button,
  Icon,
} from "@material-ui/core";
import CreateNew from "./CreateNew"

const fields = [
    "Username",
    "Email",
    "First Name",
    "Last Name"
  ]
class Manager extends Component {
   constructor(props) {
        super(props);
        this.state = {
            toggle : false
        }
    }
  
 

    toggleModal =()=> {
      console.log(this.state.toggle)
      this.setState({
        toggle: true
      })
    }
  render() {
    return (
      <div className="m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Manager", path: "/manager" },
              { name: "Manager" }
            ]}
          />
        </div>
        <SimpleCard title="Managers">
        <IconButton><Button variant="contained" color="primary" onClick={()=>{this.toggleModal()}}>Add Manager<Icon>add</Icon></Button></IconButton>
        <ManagerList/>
        {this.toggle ? <CreateNew toggleModal={this.toggleModal} name="Create Manager" fields={fields}/> : ""}
        </SimpleCard>
      </div>
    );
  }
}

export default Manager;
