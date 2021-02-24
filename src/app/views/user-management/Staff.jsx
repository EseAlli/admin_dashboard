import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import StaffList from "./StaffList";
import http from "../../services/api";
import {
  IconButton,
  Icon,
  Button
} from "@material-ui/core"

class Staff extends Component {
   constructor(props) {
        super(props);
        this.state = {
            staff : []
        }

      //  this.getStaff()
       
    }
    getStaff = () =>{
      http
      .get(`/afrimash/users/search`)
      .then((response) => {
        console.log(response.data.object)
        this.setState({
          staff: response.data.object,
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
              { name: "Staff", path: "/staff" },
              { name: "Staff" }
            ]}
          />
        </div>
        <SimpleCard title="Staff">
        <IconButton><Button variant="contained" color="primary" onClick={()=>{this.toggleModal()}}><Icon>add</Icon>Add New</Button></IconButton>
        <StaffList/>
        </SimpleCard>
      </div>
    );
  }
}

export default Staff;
