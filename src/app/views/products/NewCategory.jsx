import React, {useState, useEffect} from 'react';
import axios from "axios"
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
import ImageUpload from "./ImageUpload"

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
    // category: "",
    // productCategoryId: ""
    };

    const history = useHistory();
    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [categories, setCategories] = useState([])


    useEffect(() => {
        getCategories()        
    }, [])

    const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(state)
    setState({ ...state, [name]: value });
    };

    const onSubmit = () => {
     const data = new FormData();
     const token = localStorage.getItem("jwt_token")
    //  console.log(state)
    // for (const [key, value] of Object.entries(object1)) {
    //     console.log(`${key}: ${value}`);
    // }
    data.append("productCategory",  JSON.stringify(state))
     
     axios({
        method: "post",
        url: "https://api.afrimash.com/afrimash/product-categories",
        data,
        headers: { "Content-Type": "multipart/form-data", Authorization: "Bearer " + token},
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    //   http
    //     .post("/afrimash/product-categories", state)
    //     .then((response)=>{
    //        if (response.data.status === "OK"){  
    //            this.props.history.push("/product-categories")
    //        }else if(response.data.errorMsg !== null) {
    //            return
    //        }
    //     })
    }


    const getCategories = () => {
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
                        <FormControl className={classes.root}>
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
                           
                                
                                {/* <TextField
                                    value={state.category}
                                    onChange={handleChange}
                                    select
                                    autoFocus
                                    name="parentCategoryId"
                                    margin="dense" 
                                    variant="outlined" 
                                    helperText="Select Parent Category (Optional)"
                                    fullWidth
                                >
                                    {categories.map(category => (
                                        <MenuItem name="category" value={category.id}>{category.name}</MenuItem>
                                    )
                                    )}
                                </TextField>                                 */}
                            </div>
                                 <Button onClick={onSubmit} className="mt-5" type="submit" variant="contained" color="primary">Create</Button>
                        </FormControl>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewCategory
