import React, {useState} from 'react';
import { Breadcrumb, SimpleCard } from "matx";

import http from "../../services/api";
import { useHistory } from "react-router-dom";
import CustomerForm from './CustomerForm'

function NewCustomer() {
    const initialState = {
    email: "",
    country: "",
    password: "",
    lastName: "",
    firstName: "",
    mobileNo: "",
    state: "",
    zipCode: "",
    address: "",
    password: "password",
    secretAnswer: "secret"
    };

    const history = useHistory();

    const [state, setState] = useState(initialState);

   const handleSubmit = (event) => {
      console.log(event)
      http
        .post("/afrimash/customers", state)
        .then((response)=>{
           if (response.data.status === "OK"){  
               history.push("/customers")
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
                    { name: "New Customer" }
                    ]}
                />
            </div>
            <SimpleCard title="Create New Customer">
                <CustomerForm values={state}/>
            </SimpleCard>
        </div>
    )
}

export default NewCustomer
