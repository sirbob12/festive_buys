import React, { useState } from 'react';
import { Box, Typography, Card, Paper, Container, Grid, TextField, Button,  makeStyles} from '@mui/material';
import {Link} from 'react-router-dom';
import nextIcon from '../../festive_assets/nextIcon.png';
//import { productImage, productImage1 } from '../../utils/constants';
import { Consideration, Testimonials } from '../MUI_WEB';
import { CartComponent } from '../MUI_WEB';



const Cart = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission
      console.log('Form submitted:', formData);
      // Reset form fields
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
      });
      setErrors({});
    }
  };



  return (
    <Box sx={{pt:'40px'}}>
      <Container sx={{pb:'40px'}}>
        <Typography sx={{fontSize:'20px', fontWeight:600, pb:'20px'}} >Shipping Details</Typography>

             {/* conatiner to hold both the form and the cart */}
             <Box sx={{display:'flex', gap:'100px'}}>
               
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
            fullWidth
            margin="normal"
          />

          <Link to='/payment'>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </Link>
    </form>



             <CartComponent/>
             </Box>
         
      
       

        
     

        </Container> 
        <Consideration/>
        <Testimonials/>
    </Box>
  )
}

export default Cart