import React from 'react';
import {
    FormControl,
    InputLabel,
    Input,
    Card,
    TextField,
    Button
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
function CustomerDetails({location}) {
    const {state} = location
    return (
        <div className ="m-sm-30">
            <div  className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                    { name: "Customer", path: "/customers" },
                    { name: `Customer Details` }
                    ]}
                />
            </div>
            <SimpleCard title={`${state.username}`}>
                <div className="w-100 overflow-auto">
                    <Card>
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={state.firstName}  
                            autoFocus
                            margin="dense"
                            id="name"                     
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="outlined" 
                        />
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={state.lastName}  
                            autoFocus
                            margin="dense"
                            id="name"                     
                            label="Last Name"
                            type="text"
                            fullWidth
                            variant="outlined" 
                        />
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={state.email}  
                            autoFocus
                            margin="dense"
                            id="name"                     
                            label="Email"
                            type="text"
                            fullWidth
                            variant="outlined" 
                        />
                        <TextField
                            InputProps={{
                                readOnly: true,
                            }}
                            defaultValue={state.username}  
                            autoFocus
                            margin="dense"
                            id="name"                     
                            label="Username"
                            type="text"
                            fullWidth
                            variant="outlined" 
                        />
                    </Card>
                </div>
            </SimpleCard>
        </div>
    )
}

export default CustomerDetails
