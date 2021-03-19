import React, {useState, useEffect} from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button,
    MenuItem
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

const paymentMethod = [
    "Bank Transfer or Bank Deposit",
    "Pay with a Debit/Credit Card",
    "Pay Online With Bank By Paystack"
]

const shippingMethod = [
    "Flat Reate",
    "Free Shipping",
    "Local Pickup",
    "Marketplace Shipping By Country",
    "Store Shipping",
    "Marketplace Shipping by Weight",
    "Marketplace Shipping by Distance",
    "Table Rate"

]

function NewOrder() {
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
    const [customers, setCustomers] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        getCustomers()
        getProducts()      
    }, [])

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

    const getCustomers = () =>{
        http.get(`/afrimash/customers`)
        .then((response)=> {
            setCustomers(response.data.object)
        })
    }

    const getProducts = () => {
    http
      .get(`/afrimash/products/`)
      .then((response) => {
        console.log(response.data.object)
        setProducts(response.data.object)
      })
      .catch((err) => alert(err.response.data))
  }

    return (
        <div className="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                    { name: "Orders", path: "/orders" },
                    { name: "Create Order" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Order">
                <div className="w-100 overflow-auto">
                    <Card>
                        <FormControl className={classes.root}>
                            <div> 
                                 <TextField
                                    onChange={handleChange}
                                    value={state.name}
                                    name="name"
                                    select
                                    margin="dense"
                                    label="Customer"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                    {customers.map(customer => (
                                        <MenuItem name="customer"value={`${customer.firstName} ${customer.lastName}`}>{`${customer.firstName} ${customer.lastName}`}</MenuItem>
                                    ))}
                                </TextField>                        
                            
                            </div>
                            <div>
                               
                                <TextField
                                    onChange={handleChange}
                                    value={state.mobileNo}
                                    name="mobileNo"
                                    select
                                    margin="dense"
                                    label="Product"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {products.map(product => (
                                        <MenuItem name="product"value={product.name}>{product.name}</MenuItem>
                                    ))}
                                </TextField> 
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.address}
                                    name="address"
                                    margin="dense"
                                    label="Quantity"
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
                                    select
                                    margin="dense"
                                    label="Payment Method"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {paymentMethod.map(paymentMethod => (
                                        <MenuItem name="PaymentMethod"value={paymentMethod}>{paymentMethod}</MenuItem>
                                    ))}
                                </TextField> 
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.state}
                                    name="state"
                                    margin="dense"
                                    label="Payment Details"
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
                                    select
                                    margin="dense"
                                    label="Shipping Method"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {shippingMethod.map(shippingMethod => (
                                        <MenuItem name="shippingMethod"value={shippingMethod}>{shippingMethod}</MenuItem>
                                    ))}
                                </TextField> 
                                <TextField
                                    onChange={handleChange}
                                    value={state.zipCode}
                                    name="zipCode"
                                    margin="dense"
                                    label="Shipping Cost"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            
                            <h5>Billing</h5>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.firstName}
                                    name="firstName"
                                    margin="dense"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.lastName}
                                    name="lastName"
                                    margin="dense"
                                    label="Last Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                                       
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.email}
                                    name="email"
                                    margin="dense"
                                    label="Email"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                 <TextField
                                    onChange={handleChange}
                                    value={state.mobileNo}
                                    name="mobileNo"
                                    margin="dense"
                                    label="Phone Number"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                               
                            
                    
                                <TextField
                                    onChange={handleChange}
                                    value={state.address}
                                    name="address"
                                    margin="dense"
                                    label="Address "
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.city}
                                    name="city"
                                    margin="dense"
                                    label="City/Town"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                
                                <TextField
                                    onChange={handleChange}
                                    value={state.state}
                                    name="state"
                                    margin="dense"
                                    label="State"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.country}
                                    name="country"
                                    margin="dense"
                                    label="Country"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.zipCode}
                                    name="zipCode"
                                    margin="dense"
                                    label="Postcode/ZipCode"
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

export default NewOrder
