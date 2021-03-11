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

function EditCustomer({location}) {
    const State = location.state;
    const {currState} = State
    const history = useHistory();

    const classes = useStyles()
    
    const [state, setState] = useState(currState);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    console.log(state)
    };

    const handleSubmit = (props) => {
        http
        .put("/afrimash/customers", state)
        .then((response)=>{
           if (response.data.status === "OK"){
               return
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
                    { name: "Customer", path: "/customers" },
                    { name: "Edit Customer" }
                    ]}
                />
            </div>
            <SimpleCard title="Edit Customer">
                <div className="w-100 overflow-auto">
                    <Card>
                        <formControl className={classes.root} noValidate autoComplete="on">
                            
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.firstName}
                                    autoFocus
                                    margin="dense"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    name="firstName"
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.lastName}
                                    autoFocus
                                    margin="dense"
                                    label="Last Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                    name="lastName" 
                                />
                            </div>
                            
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.mobileNo}
                                    autoFocus
                                    name="mobileNo"
                                    margin="dense"
                                    label="Phone Number"
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
                                    value={state.address}
                                    autoFocus
                                    margin="dense"
                                    name="address"
                                    label="Address"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.city}
                                    autoFocus
                                    margin="dense"
                                    label="City/Town"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                    name="city"
                                />
                            
                            
                                
                            </div>
                            <div>
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.state}
                                    autoFocus
                                    margin="dense"
                                    label="State"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                    name="state"
                                />

                                <TextField
                                    onChange={handleChange}
                                    value={state.country}
                                    autoFocus
                                    margin="dense"
                                    label="Country"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                    name="country"
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.zipCode}
                                    autoFocus
                                    name="zipCode"
                                    margin="dense"
                                    label="Postcode/Zip"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
                        </formControl>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default EditCustomer
