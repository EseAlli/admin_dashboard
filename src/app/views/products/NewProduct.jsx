import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button,
    MenuItem,
    GridList,
    Grid,
    List,
    ListItemIcon,
    ListItemText,
    ListItem,
    ListSubheader,
    Checkbox,
    IconButton,
    FormControlLabel,
    ImageIcon,
    Icon
} from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { Breadcrumb, SimpleCard } from "matx";
import { makeStyles } from '@material-ui/core/styles';
import http from "../../services/api";
import { useHistory } from "react-router-dom";
import ImageUpload from "./ImageUpload";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { RMIUploader } from "react-multiple-image-uploader";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"

  },
  image:{    
    border: " 2px dashed #DCDCDC",
    transition: "all 350ms ease-in-out",
    background: "rgba(0, 0, 0, 0.01) !important",
    overflow:" hidden",
    borderRadius:" 4px !important",
    height: "160px",
    marginBottom: "1rem !important",
    alignItems: "center",
    width: "50%",
    justifyContent: "center",
    color: "rgba(52, 49, 76, 1)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#fff",
    display: "flex",
    boxSizing: "inherit"
  },
  grid: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  
}));

const productTypes = [
    "EXTERNAL",
    "GROUPED",
    "SIMPLE",
    "VARIANT"
]

function NewProduct() {
    const initialState = {
    productType: "",
    discountRate: "",
    price: "",
    sku: "",
    name: "",
    storeId: "",
    description: "",
    brandId: "",
    productCategories: [],
    tags: [],
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [brands, setBrand] =useState([]);
    const [tags, setTags] = useState([]);
    const [stores, setStores] = useState([])
    const [categories, setCategories] = useState([])
    const [dataSources, setDataSource] = useState([])
    const [productImages, setProductImages] = useState([])


    const onUpload = (data) => {
        let source = data
        source.forEach((item, i) => {
            item.id = i + 1;
        });
        setDataSource(source)
    };
    const onSelect = (data) => {
        console.log("Select files", data);
        let imageFiles =[]
         data.map(img =>{
             let {file} =img.img
             imageFiles.push(file)
             setProductImages(imageFiles)
        })
        
        console.log(imageFiles)
        setProductImages(data)
    };
    const onRemove = (id) => {
        let newdataSource = dataSources.filter(data =>{
           return data.id !== id
        })
        setDataSource(newdataSource)
    };


    useEffect(() => {
        getBrands()
        getTags()
        getStores()
        getCategories()
    }, [])

    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state)
    };

    const handleSelect = (newValue, fieldName) => {
        const {id} = newValue
        setState({...state, [fieldName]: id})
        console.log(state)
  };

    const getBrands = () => {
    http
      .get(`/afrimash/brands/`)
      .then((response) => {
        console.log(response.data)
        setBrand(response.data)
      })
      .catch((err) => {
          setBrand([])

        })
   }

   const getTags = () => {
    http
      .get(`/afrimash/tags/`)
      .then((response) => {
        console.log(response.data)
        setTags(response.data.object)
      })
      .catch((err) => {
          setTags([])

        })
   }

   const getStores = () => {
    http
      .get(`afrimash/stores?page=1&size=100&search=search`)
      .then((response) => {
        console.log(response.data)
        setStores(response.data.object)
      })
      .catch((err) => {
          setStores([])

        })
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


    const onSubmit = () => {
     const data = new FormData();
     const token = localStorage.getItem("jwt_token")
    //  console.log(state)
    
    let imageFiles= {
        id: "1",
        imageUrl: "",
        position: 0,
        productId: "2"
    }
    data.append("product",  JSON.stringify(state))
    data.append("imageFile", [productImages])

    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }

 
     
     axios({
        method: "post",
        url: "https://api.afrimash.com/afrimash/products",
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
    }


    return (
        <div className="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                    { name: "Products", path: "/products" },
                    { name: "New Product" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Product">
                <div className="w-100 overflow-auto">
                    <Card>
                        <FormControl className={classes.root} noValidate autoComplete="on" >
                            <div>
                                <TextField
                                    value={state.productType}
                                    onChange={handleChange}
                                    select
                                    name="productType"
                                    margin="dense" 
                                    variant="outlined" 
                                    label="Select Product Type"
                                    fullWidth
                                >
                                    {productTypes.map(productType => (
                                        <MenuItem name="productType" value={productType}>{productType}</MenuItem>
                                    )
                                    )}
                                </TextField>  
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.name}  
                                    margin="dense"
                                    name="name"
                                    id="name"
                                    label="Product Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.price}
                                    margin="dense"
                                    id="price"
                                    name="price"
                                    label="Price(₦)"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.discountRate}
                                    margin="dense"
                                    id="discountRate"
                                    name="discountRate"
                                    label="Discount Rate (%)"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.sku}
                                    margin="dense"
                                    id="sku"
                                    name="sku"
                                    label="SKU"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <Autocomplete
                                    id="storeId"
                                    name="storeId"
                                    options={stores}
                                    getOptionLabel={(option) => option.name}
                                    onChange={(event, newValue) => handleSelect(newValue, 'storeId')}
                                    renderInput={(params) => 
                                        <TextField {...params} label="Select Store" variant="outlined" margin="dense" />
                                    }
                                 />                           
                            
                            
                               <TextField
                                        onChange={handleChange}
                                        value={state.description}
                                        name="description"
                                        multiline
                                        margin="dense"
                                        label="Description"
                                        rowsMax={5}
                                        rows={1}
                                        type="text"
                                        fullWidth
                                        variant="outlined" 
                                />
                            </div>

                            <div>   
                                    <Autocomplete
                                        id="brands"
                                        options={brands}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => handleSelect(newValue, 'brandId')}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Select Brand"  margin="dense" />
                                        )}
                                    />

                                    

                                </div>
                                <div>
                                    <Autocomplete
                                        multiple
                                        id="tags"
                                        options={tags}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setState({...state, tags: newValue})
                                            console.log(state);
                                        }}
                                        renderOption={(option, { selected }) => (
                                            <React.Fragment>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.name}
                                            </React.Fragment>
                                        )}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Select Tags" placeholder="Tag" fullWidth margin="dense" />
                                        )}
                                    />

                            </div>

                             <div>

                                    <Autocomplete
                                        multiple
                                        id="categoried"
                                        options={categories}
                                        onChange={(event, newValue) => {
                                            setState({...state, productCategories: newValue})
                                            console.log(state);
                                        }}
                                        getOptionLabel={(option) => option.name}
                                        renderOption={(option, { selected }) => (
                                            <React.Fragment>
                                            <Checkbox
                                                icon={icon}
                                                checkedIcon={checkedIcon}
                                                style={{ marginRight: 8 }}
                                                checked={selected}
                                            />
                                            {option.name}
                                            </React.Fragment>
                                        )}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Select Categories" placeholder="Category" fullWidth margin="dense" />
                                        )}
                                    />

                            </div>
                            
                              
                            {/* <div className={classes.image}>
                               
                                 <input onChange={(e)=> setProductImages(e.target.files)} type="file" id="files" name="files" multiple />
                            
                            </div> */}

                            <div>
                                    <RMIUploader                                    
                                        onSelect={onSelect}
                                        onUpload={onUpload}
                                        onRemove={onRemove}
                                        dataSources={dataSources}
                                    />
                            </div>
                           
                            <Button onClick={onSubmit} variant="contained" color="primary">Create</Button>
                        </FormControl>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewProduct
