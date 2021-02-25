import React, {useState} from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button
} from "@material-ui/core";
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
  },
}));

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
    secretAnswer: "secret"
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state)
    };

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

    const galleryImageList = [
    "https://raw.githubusercontent.com/dxyang/StyleTransfer/master/style_imgs/mosaic.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dora-maar-picasso.jpg",
    "https://pbs.twimg.com/profile_images/925531519858257920/IyYLHp-u_400x400.jpg",
    "https://raw.githubusercontent.com/ShafeenTejani/fast-style-transfer/master/examples/dog.jpg",
    "http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"
  ];

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
                                    onChange={handleChange}
                                    value={state.product_name}  
                                    autoFocus
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
                                    autoFocus
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
                                    autoFocus
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
                                    autoFocus
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
                                    onChange={handleChange}
                                    value={state.short_description}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Short Description"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.description}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                              <ImageUpload cardName="Input Image" imageGallery={galleryImageList} />
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
