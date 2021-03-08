import React, { Component } from "react";
import { Breadcrumb, SimpleCard } from "matx";
import CategoryList from "./CategoryList";
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
    "Slug",
    "Description"
]

class Category extends Component {
  constructor(props){
    super(props);
    this.state ={
      categories: [],
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
        .get(`/afrimash/product-categories?page=0&size=50&search=`)
        .then((response) => {
            console.log(response.data)
            this.setState({
            categories: response.data.object,
            })
        })
        .catch((err) => {
            this.setState({
                categories:[]
            })
            alert(err.response.data)
        })
    }

     handleSubmit = (state) => {
      http
        .post("/afrimash/categories", state)
        .then((response)=>{
           if (response.data.status === "OK"){  
               this.props.history.push("/product-categories")
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
              { name: "Category", path: "/product-categories" },
              { name: "Category" }
            ]}
          />
        </div>
        <SimpleCard title="All Tags">
       <Link
         to={{
             pathname: 'product-category/new',
             state:{
                 categories: this.state.categories
             }
         }}
         >
         <IconButton><Button variant="contained" color="primary">Create Category<Icon>add</Icon></Button></IconButton>
       </Link>
       
        <CategoryList categories={this.state.categories}/>
        </SimpleCard>
      </div>
    );
  }
}

export default Category;
