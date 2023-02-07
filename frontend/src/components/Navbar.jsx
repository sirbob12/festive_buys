import React from 'react';
import { Stack, Container, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import {logo} from '../utils/constants';
import {SearchBar} from './'


const navitems = [
  'Home', 'Stream', 'Live'
]


const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" pt={2} pb={1} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Container sx={{display:"flex", justifyContent:"space-between"}}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
   
    <SearchBar />
    </Container>
  </Stack>
  )
}

export default Navbar
