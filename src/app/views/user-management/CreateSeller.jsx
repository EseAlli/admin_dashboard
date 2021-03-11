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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '63ch',
    },
  },
}));

function NewVendor() {
    const initialState = {
    email: "",
    country: "",
    password: "",
    name: "",
    mobileNo: "",
    // storeSlug: "",
    state: "",
    // storeName: "",
    zipCode: "",
    address: "",
    // storeEmail: "",
    password: "password",
    secretAnswer: "secret",
    creditLimit: "",
    creditSpent: "",
    loyaltyNo: "",
    loyaltyPoint: "",
    picture: "",
    referralCode: "",
    walletBalance: ""
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    };

    const handleSubmit = () => {
      http
        .post("/afrimash/sellers", state)
        .then((response)=>{
           if (response.data.status === "OK"){  
               history.push("/vendors")
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
                    { name: "Seller", path: "/vendors" },
                    { name: "New Seller" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Seller">
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
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.email}
                                    name="email"
                                    autoFocus
                                    margin="dense"
                                    label="Email"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                               
                                <TextField
                                    onChange={handleChange}
                                    value={state.mobileNo}
                                    name="mobileNo"
                                    autoFocus
                                    margin="dense"
                                    label="Phone Number"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.address}
                                    name="address"
                                    autoFocus
                                    margin="dense"
                                    label="Address"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            {/* <div>
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.storeName}
                                    autoFocus
                                    name="storeName"
                                    margin="dense"
                                    label="Store Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.storeName}
                                    autoFocus
                                    name="storeName"
                                    margin="dense"
                                    label="Store Slug"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div> */}
                            
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.city}
                                    name="city"
                                    autoFocus
                                    margin="dense"
                                    label="City/Town"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.state}
                                    name="state"
                                    autoFocus
                                    margin="dense"
                                    label="State"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.country}
                                    name="country"
                                    autoFocus
                                    margin="dense"
                                    label="Country"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                                <TextField
                                    onChange={handleChange}
                                    value={state.zipCode}
                                    name="zipCode"
                                    autoFocus
                                    margin="dense"
                                    label="Postcode/Zip"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
                        </FormControl>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewVendor
