import React, {useState, useEffect} from 'react';
import 'date-fns';
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
  },
}));

const paymentMethod = [
    "Bank Transfer or Bank Deposit",
    "Pay with a Debit/Credit Card",
    "Pay Online With Bank By Paystack"
]

const couponTypes = [
    "Percentage Discount",
    "Fixed Cart Discount",
    "Fixed Product Discount",
    "Store Credit/ Gift Certificate"
]


function EditCoupon({location}) {
    const State = location.state;
    const {currState} = State
    const history = useHistory();

    const classes = useStyles()
    
    const [state, setState] = useState(currState);

    const [sellers, setSellers] = useState([])
    const [products, setProducts] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
            setSelectedDate(date);
    };
   
    useEffect(() => {
        getSellers()
        getProducts()      
    }, [])

    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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

    const getSellers = () =>{
        http.get(`/afrimash/sellers/search?`)
        .then((response)=> {
            setSellers(response.data.object)
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
                    { name: "Edit Coupon" }
                    ]}
                />
            </div>
            <SimpleCard title="Edit Coupon">
                <div className="w-100 overflow-auto">
                    <Card>
                        <FormControl className={classes.root}>
                            <div> 
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

                                <TextField
                                    onChange={handleChange}
                                    value={state.mobileNo}
                                    name="mobileNo"
                                    select
                                    margin="dense"
                                    label="Discount Type"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                >
                                {couponTypes.map(couponType => (
                                        <MenuItem name="couponType"value={couponType}>{couponType}</MenuItem>
                                    ))}
                                </TextField>
                                                           
                            </div>
                            <div>
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

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Coupon Expiry Date"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                            
                            <div>
                              

                                <TextField
                                    onChange={handleChange}
                                    value={state.description}
                                    name="description"
                                    margin="dense"
                                    label="Description"
                                    multiline
                                    rows={3}
                                    rowsMax={5}
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                                 
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
                                    value={state.mobileNo}
                                    name="mobileNo"
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
                                    value={state.mobileNo}
                                    name="mobileNo"
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
                                    value={state.zipCode}
                                    name="zipCode"
                                    margin="dense"
                                    label="Usage Limit Per Coupon"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.zipCode}
                                    name="zipCode"
                                    margin="dense"
                                    label="Usage Limit Per User"
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

export default EditCoupon
