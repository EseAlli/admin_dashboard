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
                    { name: "Customer", path: "/Customer/New" },
                    { name: "Edit Customer" }
                    ]}
                />
            </div>
            <SimpleCard title="Edit Customer">
                <div className="w-100 overflow-auto">
                    <Card>
                        <form className={classes.root} noValidate autoComplete="on" onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.user.username}  
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Username"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.email}
                                    autoFocus
                                    margin="dense"
                                    id="name"
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
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.lastName}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Last Name"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            </div>
                            <div>
                                <TextField
                                    onChange={handleChange}
                                    value={state.seller}
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Seller"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.companyName}
                                    autoFocus
                                    margin="dense"
                                    id="name"
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
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Phone Number"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.address1}
                                    autoFocus
                                    margin="dense"
                                    id="name"
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
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Address 2"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.country}
                                    autoFocus
                                    margin="dense"
                                    id="name"
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
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="City/Town"
                                    type="text"
                                    fullWidth
                                    variant="outlined" 
                                />
                            
                            
                                <TextField
                                    onChange={handleChange}
                                    value={state.state}
                                    autoFocus
                                    margin="dense"
                                    id="name"
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
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Postcode/Zip"
                                    type="text"
                                    fullWidth 
                                    variant="outlined"
                                />
                            
                            </div>
                            <Button variant="contained" color="primary">Submit</Button>
                        </form>
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default EditCustomer
