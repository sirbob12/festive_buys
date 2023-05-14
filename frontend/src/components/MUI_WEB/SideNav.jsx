import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../../utils/sideComponents';
import { Sidebar, MenuItem, Menu, sidebarClasses } from 'react-pro-sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';


const SideNav = () => {

   //use location hook to track route pathways and highligh active routes
   const location = useLocation()

   return(
      <Box>
         <Sidebar 
         rootStyles={{
         [`.${sidebarClasses.container}`]: {
            backgroundColor: '#382C67',
            color:'#fff',
            fontSize:'20px',
            paddingTop:'20px',
            paddingBottom:'80px',
            paddingLeft:'10px',
            paddingRight:'10px'
         
           
            
         },
  }} >
            <Menu  sx={{px:'5px'}}
               menuItemStyles={{
                  button:({active, level})=>{
                     
                    return{
                      backgroundColor: active? '#F05AB4': undefined,
                      "&:hover":{
                        background:'#F05AB4',
                        fontWeight:'bold',
                        borderRadius:'4px',
                        paddingLeft:'15px',
                        
                      },

                      paddingTop:'15px',
                      paddingBottom:'15px'

                    }
                  }
                }}
            
            >
               <MenuItem active={location.pathname === '/admin/dashboard'} component={<Link to='/admin/dashboard'/>}  icon={<GridViewIcon/>}>Dashboard</MenuItem>
               <MenuItem  active={location.pathname === '/admin/order'} component={<Link to='/admin/order'/>} icon={<AccountBalanceWalletIcon/>}>Orders</MenuItem>
               <MenuItem active={location.pathname === '/admin/transactions'} component={<Link to='/admin/transcations'/>}  icon={<EventRepeatIcon/>}> Transactions</MenuItem>
               <MenuItem active={location.pathname === '/admin/analytics'} component={<Link to='/admin/analytics'/>}  icon={<EventRepeatIcon/>}>Analytics</MenuItem>
            </Menu>
         </Sidebar>
      </Box>
   
   )
}

export default SideNav