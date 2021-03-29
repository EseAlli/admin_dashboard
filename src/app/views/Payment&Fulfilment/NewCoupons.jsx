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
    FormControlLabel,
    
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
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
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
  },
}));

const couponTypes = [
    "Order Discount",
    "Product Discount",
]

const discountApplyModes = [
    "Fixed Amount",
    "Percentage",
]

const paymentMethods = [
    "Bank Transfer",
    "Cash",
    "POS",
    "Paystack",
    "Wallet"
]

function NewCoupon() {
    const initialState = {
    name: "",
    code: "",
    enabled: "",
    maximumOff: 0,
    minimumBuy: 0,
    barcode: "",
    expireDate: "",
    applyToAll: false,
    value: null,
    couponType: "",
    modifiable: false,
    neverExpire: false,
    newUsersOnly: false,
    discountApplyMode: "",
    excludedProducts: [],
    excludedProductCategories:[],
    productCategories:[],
    products:[],
    customers: [],
    paymentMethod:"",
    providesFreeShipping: false,
    individualUseOnly: false,
    limitPerUser: 0,
    overallUsageLimit: 0
    };

    const history = useHistory();

    const classes = useStyles()
    const [state, setState] = useState(initialState);
    const [sellers, setSellers] = useState([])
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18 21:11'));
    const [checked, setChecked] = useState(false)

    const handleDateChange = (event) => {
        let date = event.target.value
            console.log(event.target.value)
            // setSelectedDate(date);
            let newDate = new Date(date)
            let dateformat = newDate.toISOString().
                             replace(/T/, ' ').      
                             replace(/\..+/, '') 
                            console.log(dateformat)
            setState({...state, expireDate: dateformat})
    };
    const handleCheck = (event) => {
    // setChecked(event.target.checked);
    const {value, checked} = event.target
    setState({...state, [value]: checked})

    console.log(state)
  };


    useEffect(() => {
        getProducts()  
        getCategories()    
    }, [])

    const handlePaymentmethod = ( value) => {
        let payment = "PAYMENT_METHOD_"
        if (value === 'Bank Transfer'){
            setState({...state, paymentMethod: `${payment}BANK_TRANSFER` })
        }else if (value === 'POS'){
            setState({...state, paymentMethod: `${payment}POS` })
        }else if (value === 'Paystack'){
            setState({...state, paymentMethod: `${payment}PAYSTACK` })
        }else if (value === 'Cash'){
            setState({...state, paymentMethod: `${payment}CASH` })
        }else if (value === 'Wallet'){
            setState({...state, paymentMethod: `${payment}WALLET` })
        }
    }

    const handleChange = (e) => {
        let { name, value } = e.target;   
        console.log(value)
        if ( name === "couponType"){
            if( value === "Order Discount"){
                setState({...state, couponType: "ORDER_DISCOUNT"})
            }else if (name === "Product Discount"){
                 setState({...state, couponType: "PRODUCT_DISCOUNT"})
            }
        }else if ( name === "discountApplyMode"){
            if( value === "Fixed Amount"){
                setState({...state, discountApplyMode: "FIXED_AMOUNT"})
            }else if (name === "Percentage"){
                 setState({...state, discountApplyMode: "PERCENTAGE"})
            }
        }else if (name === "paymentMethod"){
            handlePaymentmethod(value)
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
                                    // value={state.couponType}
                                    name="couponType"
                                    select
                                    margin="dense"
                                    label="Coupon Type"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {couponTypes.map(couponType => (
                                        <MenuItem name="couponType" value={couponType}>{couponType}</MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    onChange={handleChange}
                                    value={state.value}
                                    name="value"
                                    margin="dense"
                                    label="Coupon Amount"
                                    type="number"
                                    fullWidth
                                    variant="outlined" 
                                />

                            </div>

                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.barcode}
                                    name="barcode"
                                    margin="dense"
                                    label="Barcode"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                                
                                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="outlined"
                                    format="yyyy/MM/dd HH:mm"
                                    margin="dense"
                                    label="Coupon Expiry Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    fullWidth
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </MuiPickersUtilsProvider> */}

                                <TextField
                                    id="date"
                                    label="Coupon Expiry Date"
                                    type="datetime-local"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    name="expireDate"
                                    onChange={handleDateChange}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />


                            </div>

                            <div>
                                <TextField
                                    onChange={handleChange}
                                    name="discountApplyMode"
                                    select
                                    margin="dense"
                                    label="Discount Apply Mode" 
                                    fullWidth
                                    variant="outlined" 
                                >
                                {discountApplyModes.map(discountApplyMode => (
                                        <MenuItem name="discountApplyMode" value={discountApplyMode}>{discountApplyMode}</MenuItem>
                                    ))}
                                </TextField>
                            </div>

                            <div>
                                <TextField
                                    onChange={handleChange}
                                    name="paymentMethod"
                                    select
                                    margin="dense"
                                    label="Payment Method" 
                                    fullWidth
                                    variant="outlined" 
                                >
                                {paymentMethods.map(paymentMethod => (
                                        <MenuItem name="paymentMethod" value={paymentMethod}>{paymentMethod}</MenuItem>
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
                                    value={state.minimumBuy}
                                    name="minimumBuy"
                                    margin="dense"
                                    label="Minimum Spend"
                                    type="number"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.maximumOff}
                                    name="maximumOff"
                                    margin="dense"
                                    label="Maximum Spend"
                                    type="number"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.overallUsageLimit}
                                    name="overallUsageLimit"
                                    margin="dense"
                                    label="Overall Usage Limit"
                                    type="number"
                                    fullWidth 
                                    variant="outlined"
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.limitPerUser}
                                    name="limitPerUser"
                                    margin="dense"
                                    label="Usage Limit Per User"
                                    type="number"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            <div>
                                 <Autocomplete
                                        multiple
                                        id="products"
                                        options={products}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setState({...state, products: newValue})
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
                                            <TextField {...params} variant="outlined" label="Products" placeholder="Filter  " fullWidth margin="dense" />
                                        )}
                                    />
                                </div>
                                <div>
                                    <Autocomplete
                                        multiple
                                        id="products"
                                        options={products}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setState({...state, excludedProducts: newValue})
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
                                            <TextField {...params} variant="outlined" label="Excluded Products" placeholder="Filter by Products" fullWidth margin="dense" />
                                        )}
                                    />
                                </div>
                                <div>

                                     <Autocomplete
                                        multiple
                                        id="categories"
                                        options={categories}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setState({...state, productCategories: newValue})
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
                                            <TextField {...params} variant="outlined" label="Select Categories" placeholder="Categories" fullWidth margin="dense" />
                                        )}
                                    />
                                </div>
                                <div>
                                     <Autocomplete
                                        fullwidth
                                        multiple
                                        id="categories"
                                        options={categories}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(event, newValue) => {
                                            setState({...state, excludedProductCategories: newValue})
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
                                            <TextField {...params} variant="outlined" label="Excluded Categories" placeholder="Categories" fullWidth margin="dense" />
                                        )}
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
