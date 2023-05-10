import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { categories } from '../../utils/sideComponents';
import { Sidebar, MenuItem, Menu, sidebarClasses } from 'react-pro-sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';


const SideNav = () => {
   return(
      <Box>
         <Sidebar 
         rootStyles={{
         [`.${sidebarClasses.container}`]: {
            backgroundColor: '#382C67',
            color:'#fff',
            fontSize:'20px',
            paddingTop:'20px',
            paddingBottom:'10px',
            paddingLeft:'10px',
            paddingRight:'10px'
           
            
         },
  }} >
            <Menu  sx={{px:'5px'}}
               menuItemStyles={{
                  button:({active})=>{
                    return{
                      backgroundColor: active? '#f5d9ff': undefined,
                      "&:hover":{
                        background:'#F05AB4',
                        fontWeight:'bold',
                        borderRadius:'4px',
                        paddingLeft:'15px'
                      }
                    }
                  }
                }}
            
            >
               <MenuItem icon={<GridViewIcon/>}>Dashboard</MenuItem>
               <MenuItem icon={<AccountBalanceWalletIcon/>}>Orders</MenuItem>
               <MenuItem icon={<EventRepeatIcon/>}> Transactions</MenuItem>
               <MenuItem icon={<EventRepeatIcon/>}>Analytics</MenuItem>
            </Menu>
         </Sidebar>
      </Box>
   
   )
}

export default SideNav