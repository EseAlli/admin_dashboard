import React, {useState, useEffect} from 'react';
import 'date-fns';
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button,
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
import { makeStyles } from '@material-ui/core/styles';
import http from "../../services/api";
import { useHistory } from "react-router-dom";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '63ch',
    },
    formControl: {
    margin: theme.spacing(2),
  },
  },
}));

const paymentMethod = [
    "Bank Transfer or Bank Deposit",
    "Pay with a Debit/Credit Card",
    "Pay Online With Bank By Paystack"
]

// const couponTypes ={
//     ORDER_DISCOUNT : "Order Discount",
//     PRODUCT_DISCOUNT: "Product Discount"
// }

const couponTypes = [
    "Order Discount",
    "Product Discount",
]

const discountApplyMode = [
    "Fixed Amount",
    "Percentage",
]


function NewCoupon() {
    const initialState = {
    name: "",
    code: "",
    enabled: "",
    maximumOff: "",
    minimumBuy: "",
    barcode: "",
    expireDate: "",
    barcode: "",
    applyToAll: false,
    value: "",
    couponType: "",
    modifiable: false,
    neverExpire: "",
    newUsersOnly: false,
    discountApplyMode: [],
    excludedProducts: [],
    excludedProductCategories:[],
    productCategories:[],
    products:[],
    customers: [],
    paymentMethod:"",
    creditLimit: "",
    creditSpent: "",
    loyaltyNo: "",
    loyaltyPoint: "",
    picture: "",
    referralCode: "",
    walletBalance: "",
    providesFreeShipping: false,
    individualUseOnly: false,
    limitPerUser: "",
    overallUsageLimit: ""
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [sellers, setSellers] = useState([])
    const [products, setProducts] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [checked, setChecked] = useState(false)

    const handleDateChange = (date) => {
            setSelectedDate(date);
    };
    const handleCheck = (event) => {
    // setChecked(event.target.checked);
    const {value, checked} = event.target
    setState({...state, [value]: checked})

    console.log(state)
  };


    useEffect(() => {
        getProducts()      
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target;      
        if ( name === "couponType"){
            if( value = "Order Discount"){
                setState({...state, couponType: "ORDER_DISCOUNT"})
            }else if (name === "Product Discount"){
                 setState({...state, couponType: "PRODUCT_DISCOUNT"})
            }
        }else if ( name === "discountApplyMode"){
            if( value = "Fixed Amount"){
                setState({...state, couponType: "FIXED_AMOUNT"})
            }else if (name === "Percentage"){
                 setState({...state, couponType: "PERCENTAGE"})
            }
        }
        else{
            setState({ ...state, [name]: value });
        }
        console.log(state)
    };

    const handleSubmit = () => {
      http
        .post("/afrimash/coupons", state)
        .then((response)=>{
           if (response.data.status === "OK"){  
               history.push("/coupons")
           }else if(response.data.errorMsg !== null) {
               return
           }
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
                    { name: "Coupons", path: "/coupons" },
                    { name: "Create Coupon" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Coupon">
                <div className="w-100 overflow-auto">
                    <Card>
                        <FormControl className={classes.root}>
                            <div> 
                                <TextField
                                    onChange={handleChange}
                                    value={state.name}
                                    name="name"
                                    margin="dense"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                 <TextField
                                    onChange={handleChange}
                                    value={state.code}
                                    name="code"
                                    margin="dense"
                                    label="Code"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                                                           
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.couponType}
                                    name="couponType"
                                    select
                                    margin="dense"
                                    label="Discount Type"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {couponTypes.map(couponType => (
                                        <MenuItem name="couponType"value={state.couponType}>{couponType}</MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    onChange={handleChange}
                                    value={state.amount}
                                    name="address"
                                    margin="dense"
                                    label="Coupon Amount"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                            </div>

                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.barcode}
                                    name="address"
                                    margin="dense"
                                    label="Barcode"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                <TextField
                                    id="date"
                                    label="Coupon Expiry Date"
                                    type="date"
                                    variant="outlined"
                                    margin="dense"
                                    name="expireDate"
                                    onChange={handleChange}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />

                            </div>

                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.discountApplyMode}
                                    name="discountApplyMode"
                                    select
                                    margin="dense"
                                    label="Discount Apply Mode"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {discountApplyMode.map(discountApplyMode => (
                                        <MenuItem name="discountApplyMode" value={state.discountApplyMode}>{discountApplyMode}</MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            
                            <div>
                                <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.providesFreeShipping}
                                            value="providesFreeShipping"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="Allow Free Shipping"
                                    labelPlacement="start"
                                />
                            
                                </FormGroup>
                            </div>
                        </FormControl>
                    </Card>
                 </div>
            </SimpleCard>
                        <br/>
                        <SimpleCard>
                        <div className="w-100 overflow-auto">
                        <Card>
                        <FormControl className={classes.root}>                            
                            <h5>Restrictions/Limits</h5>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.firstName}
                                    name="firstName"
                                    margin="dense"
                                    label="Minimum Spend"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.lastName}
                                    name="lastName"
                                    margin="dense"
                                    label="Maximum Spend"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                 <TextField
                                    onChange={handleChange}
                                    value={state.product}
                                    name="product"
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
                                    value={state.excludedProducts}
                                    name="excludedProducts"
                                    select
                                    margin="dense"
                                    label="Excluded Product"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {products.map(product => (
                                        <MenuItem name="product"value={product.name}>{product.name}</MenuItem>
                                    ))}
                                </TextField> 

                            </div>
                            <div>
                                 <TextField
                                    onChange={handleChange}
                                    value={state.productCategories}
                                    name="productCategories"
                                    select
                                    margin="dense"
                                    label="Categories"
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
                                    value={state.mobileNo}
                                    name="mobileNo"
                                    select
                                    margin="dense"
                                    label="Excluded Categories"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {products.map(product => (
                                        <MenuItem name="product"value={product.name}>{product.name}</MenuItem>
                                    ))}
                                </TextField> 

                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.overallUsageLimit}
                                    name="overallUsageLimit"
                                    margin="dense"
                                    label="Overall Usage Limit"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.limitPerUser}
                                    name="limitPerUser"
                                    margin="dense"
                                    label="Usage Limit Per User"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            <div>
                                <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.individualUseOnly}
                                            value="individualUseOnly"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="Individual Use Only"
                                    labelPlacement="start"
                                />
                                 
                    
                                
                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.enabled}
                                            value="enabled"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="Enabled"
                                    labelPlacement="start"
                                />
                                 
                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.applyToAll}
                                            value="applyToAll"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="Apply To All"
                                    labelPlacement="start"
                                />

                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.modifiable}
                                            value="modifiable"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="Modifiable"
                                    labelPlacement="start"
                                />

                                <FormControlLabel
                                    value="top"
                                    control={
                                        <Checkbox
                                            checked={state.newUsersOnly}
                                            value="newUsersOnly"
                                            onChange={handleCheck}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                            color="primary"
                                        /> 
                                    }
                                    label="New Users Only"
                                    labelPlacement="start"
                                />
                                 
                                </FormGroup>                                                             
                            </div>
                            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Create</Button>
                        </FormControl>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default NewCoupon
