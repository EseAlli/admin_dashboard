import React, {useState, useEffect} from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button,
    Select,
    MenuItem,
    TextareaAutosize
} from "@material-ui/core";
import {useLocation} from "react-router-dom";
import { Breadcrumb, SimpleCard } from "matx";
import { makeStyles } from '@material-ui/core/styles';
import http from "../../services/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '63ch',
      formcontrol:{
          minWidth: "100%"
      }
    },
  },
}));

function NewCategory({ handleSubmit}) {
    const initialState = {
    name: "",
    country: "",
    password: "",
    lastName: "",
    firstName: "",
    mobileNo: "",
    state: "",
    slug: "",
    companyName: "",
    postcode: "",
    address1: "",
    address2: "",
    password: "password",
    secretAnswer: "secret"
    };

    const history = useHistory();
    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [categories, setCategories] = useState([])


    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(state);
        console.log(state)
    }

    const getTag = () => {
        http
        .get(`/afrimash/product-categories?page=0&size=50&search=`)
        .then((response) => {
            console.log(response.data)
            setCategories(response.data.object)
        })
        .catch((err) => {
            setCategories([])
            alert(err.response.data)
        })
    }

    return (
        <div className="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                    { name: "Product Category", path: "/product-categories" },
                    { name: "New Product Category" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Product Category">
                <div className="w-100 overflow-auto">
                    <Card>
                        <form className={classes.root}  onSubmit={onSubmit}>
                            <div>
                                 <TextField
                                    onChange={handleChange}
                                    value={state.name}
                                    name="name"
                                    autoFocus
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.slug}  
                                    name="slug"
                                    autoFocus
                                    margin="dense"
                                    label="Slug"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />                            
                            </div>
                            <div>
                                <TextareaAutosize
                                    rowsMax={8}
                                    aria-label="maximum height"
                                    placeholder="Description"
                                    
                               />
                            </div>
                           
                            
                            <Button type="submit" variant="contained" color="primary">Create</Button>
                        </form>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewCategory
