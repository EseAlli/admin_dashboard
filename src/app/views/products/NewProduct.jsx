import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
  Button,
  Icon,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Card,
  Input
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

class NewProduct extends Component {
  state = {
    name: "",
    description: "",
    category: "",
    date: new Date(),
    price: "",
    salePrice: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    agreement: ""
  };

  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule("isPasswordMatch", value => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }

  // componentWillUnmount() {
  //   // remove rule when it is not needed
  //   ValidatorForm.removeValidationRule("isPasswordMatch");
  // }

  handleSubmit = event => {
    console.log("submitted");
    console.log(event);
  };

  handleChange = event => {
    event.persist();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    console.log(date);

    this.setState({ date });
  };

  render() {
    let {
      name,
      description,
      price,
      salePrice,
      mobile,
      password,
      confirmPassword,
      gender,
      date,
      category
    } = this.state;
    return (
    <Card>
      <div className="w-100 overflow-auto m-sm-30">
        <div  className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Product", path: "/product/new" },
              { name: "New Product" }
            ]}
          />
        </div>
      
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
          onError={errors => null}
        >
          <h2>Add New Product</h2>
          <hr/>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-16 w-100"
                id="outlined-basic" 
                label="Name"
                onChange={this.handleChange}
                type="text"
                name="name"
                value={name}
                variant="outlined"
                validators={[
                  "required",
                  "minStringLength: 4",
                  "maxStringLength: 9"
                ]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Description"
                onChange={this.handleChange}
                type="text"
                name="description"
                value={description}
                variant="outlined"
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Category"
                onChange={this.handleChange}
                type="category"
                name="category"
                value={category}
                variant="outlined"
                validators={["required", "isCategory"]}
                errorMessages={["this field is required", "category is not valid"]}
              />

              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className="mb-16 w-100"
                  margin="none"
                  id="mui-pickers-date"
                  label="Date picker"
                  inputVariant="standard"
                  type="text"
                  autoOk={true}
                  value={date}
                  variant="outlined"
                  onChange={this.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider> */}
              <TextValidator
                className="mb-32 w-100"
                label="Price (₦)"
                onChange={this.handleChange}
                type="number"
                name="price"
                variant="outlined"
                value={price}
                validators={[
                  "required",
                  "minStringLength:16",
                  "maxStringLength: 16"
                ]}
                errorMessages={["this field is required"]}
              />

              <TextValidator
                className="mb-32 w-100"
                label="Sale Price (₦)"
                onChange={this.handleChange}
                type="number"
                name="salePrice"
                variant="outlined"
                value={salePrice}
                validators={[
                  "required",
                  "minStringLength:16",
                  "maxStringLength: 16"
                ]}
                errorMessages={["this field is required"]}
              />
              
            </Grid>
            
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <TextValidator
                className="mb-32 w-100"
                label="Coupons (₦)"
                onChange={this.handleChange}
                type="number"
                name="salePrice"
                variant="outlined"
                value={salePrice}
                validators={[
                  "required",
                  "minStringLength:16",
                  "maxStringLength: 16"
                ]}
                errorMessages={["this field is required"]}
              />

              <TextValidator
                className="mb-16 w-100"
                label="Mobile Nubmer"
                onChange={this.handleChange}
                type="text"
                name="mobile"
                variant="outlined"
                value={mobile}
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Password"
                onChange={this.handleChange}
                name="password"
                type="password"
                value={password}
                variant="outlined"
                validators={["required"]}
                errorMessages={["this field is required"]}
              />
              <TextValidator
                className="mb-16 w-100"
                label="Confirm Password"
                onChange={this.handleChange}
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                validators={["required", "isPasswordMatch"]}
                errorMessages={[
                  "this field is required",
                  "password didn't match"
                ]}
              />
              <RadioGroup
                className="mb-16"
                value={gender}
                name="gender"
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio color="secondary" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio color="secondary" />}
                  label="Female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio color="secondary" />}
                  label="Others"
                  labelPlacement="end"
                />
              </RadioGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I have read and agree to the terms of service."
              />
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <span className="pl-8 capitalize">Send</span>
          </Button>
        </ValidatorForm>
     
     </div>
      </Card>
    );
  }
}

export default NewProduct;
