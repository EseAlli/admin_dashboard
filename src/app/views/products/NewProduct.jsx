import React, {useState, useEffect, Fragment} from 'react';
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
    Icon,
} from "@material-ui/core";
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { FixedSizeList, ListChildComponentProps } from 'react-window';
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
    },
    '& .MuiGridList-root': {
      margin: theme.spacing(4),
      display:"inline-block",
      padding: theme.spacing(5),
      width: '31ch',
      height: 159,
      backgroundColor: theme.palette.background.paper,
    },
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
    email: "",
    country: "",
    password: "",
    lastName: "",
    firstName: "",
    mobileNo: "",
    state: "",
    username: "",
    seller: "",
    companyName: "",
    postcode: "",
    address1: "",
    address2: "",
    password: "password",
    secretAnswer: "secret",
    productType: ""
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [brands, setBrand] =useState([]);
    const [tags, setTags] = useState([]);
    const [stores, setStores] = useState([])
    const [categories, setCategories] = useState([])

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


    const handleSubmit = (props) => {
        http
        .post("/afrimash/product", state)
        .then((response)=>{
           if (response.data.status === "OK"){
               const nextPage = props.location.state && props.location.state.from ? props.location.state.form : "/cutomers"
               history.push(nextPage)
           }else if(response.data.errorMsg !== null) {
               return
           }
        })
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
                        <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSubmit}>
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
                                    value={state.product_name}  
                                    margin="dense"
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
                                    id="name"
                                    label="Price(₦)"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.sale_price}
                                    margin="dense"
                                    id="name"
                                    label="Sale Price (₦)"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.sku}
                                    margin="dense"
                                    id="name"
                                    label="SKU"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    value={state.store}
                                    onChange={handleChange}
                                    select
                                    autoFocus
                                    name="parentCategoryId"
                                    margin="dense" 
                                    variant="outlined" 
                                    label="Select Store"
                                    fullWidth
                                >
                                    {stores.map(store => (
                                        <MenuItem name="store" value={store.id}>{store.name}</MenuItem>
                                    )
                                    )}
                                </TextField>                                
                            
                            
                               <TextField
                                        onChange={handleChange}
                                        value={state.description}
                                        name="description"
                                        multiline
                                        margin="dense"
                                        label="Description"
                                        rowsMax={5}
                                        rows={4}
                                        type="text"
                                        fullWidth
                                        variant="outlined" 
                                />
                            </div>
                            
                             <div className="pl-10">
                                   {/* <Grid container className={classes.root} spacing={2}>
                                    <Grid item xs={12}>
                                        
                                        <GridList variant="outlined" margin="dense"  cellHeight="auto">
                                    <ListSubheader component="div">Brands</ListSubheader>
                                    {brands.map((brand) => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="brand"
                                                color="primary"
                                            />
                                            }
                                            label={brand.name}
                                        />
                                    ))}
                                    </GridList>
                                    </Grid>
                                    </Grid> */}
                                    {/* <GridList variant="outlined" margin="dense"  cellHeight="auto">
                                    <ListSubheader component="div">Brands</ListSubheader>
                                    {brands.map((brand) => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="brand"
                                                color="primary"
                                            />
                                            }
                                            label={brand.name}
                                        />
                                    ))}
                                    </GridList>                       
                                    
                                    <GridList margin="dense" variant="outlined" cellHeight="auto">
                                    <ListSubheader component="div">Category</ListSubheader>
                                    {categories.map((category) => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="checkedB"
                                                color="primary"
                                            />
                                            }
                                            label={category.name}
                                        />
                                    ))}
                                    </GridList>
                                
                                    
                                    <GridList margin="dense"  cellHeight="auto">
                                    <ListSubheader component="div">Tags</ListSubheader>
                                    {tags.map((tag) => (
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={state.checkedB}
                                                onChange={handleChange}
                                                name="checkedB"
                                                color="primary"
                                            />
                                            }
                                            label={tag.name}
                                        />
                                    ))}
                                    </GridList> */}
                                
                            </div> 
                            <div className={classes.image}>
                                {/* <input 
                                accept="image/*" 
                                multiple="" 
                                type="file" 
                                autocomplete="off" 
                                tabindex="-1" 
                                style={{display: "none"}}/> */}
                                 <input type="file" id="files" name="files" multiple />
                            <div>
                                {/* <Icon>publish</Icon>
                                <span>Drop product images</span> */}
                            </div>
                            </div>
                           
                            <Button variant="contained" color="primary">Create</Button>
                        </form>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewProduct
