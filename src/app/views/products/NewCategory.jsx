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

function NewCategory({ handleSubmit}) {
    const initialState = {
    email: "",
    country: "",
    password: "",
    lastName: "",
    firstName: "",
    mobileNo: "",
    state: "",
    username: "",
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
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(state);
        console.log(state)
    }

    return (
        <div className="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                    { name: "Customer", path: "/customers" },
                    { name: "New Customer" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Customer">
                <div className="w-100 overflow-auto">
                    <Card>
                        <form className={classes.root}  onSubmit={onSubmit}>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.username}  
                                    name="username"
                                    autoFocus
                                    margin="dense"
                                    label="Username"
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
                                    value={state.firstName}
                                    name="firstName"
                                    autoFocus
                                    margin="dense"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.lastName}
                                    autoFocus
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
                                    value={state.companyName}
                                    autoFocus
                                    name="companyName"
                                    margin="dense"
                                    label="Company Name"
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
                                    value={state.address1}
                                    name="address1"
                                    autoFocus
                                    margin="dense"
                                    label="Address 1"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.address2}
                                    name="address2"
                                    autoFocus
                                    margin="dense"
                                    label="Address 2"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
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
                            </div>
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
                                    value={state.postcode}
                                    name="postcode"
                                    autoFocus
                                    margin="dense"
                                    label="Postcode/Zip"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
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
