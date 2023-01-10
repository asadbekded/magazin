import React from 'react';
import { Box, Link, Stack } from '@mui/material';
import { NavLink as RouterLink} from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CategoryIcon from '@mui/icons-material/Category';
import SellIcon from '@mui/icons-material/Sell';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

export const Sidebar = () => {
  return (
    <Box sx={{width: "100%", padding: "10px", maxWidth: 200, backgroundColor:'gray', height: '100vh'}}>
      <Box sx={{marginBottom: '35px'}}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Stop_%26_Shop_Logo.svg' alt='site logo' width={170} height={70}/>
      </Box>

      <Stack spacing={2} sx={{textAlign: 'center'}}>
      <Box sx={{ display: 'flex', paddingLeft: '10px', alignItems: 'center'}}>
          <SupervisorAccountIcon sx={{color: 'white', marginRight: '15px'}}/>
          <Link sx={{color: 'white'}}  underline='hover' component={RouterLink} end to="/admin">Admin</Link>
        </Box>
        <Box sx={{ display: 'flex', paddingLeft: '10px', alignItems: 'center'}}>
          <SellIcon sx={{color: 'white', marginRight: '15px'}}/>
          <Link sx={{color: 'white'}}  underline='hover' component={RouterLink} to="/admin/orders">Orders</Link>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: '10px', alignItems: 'center'}}>
          <CategoryIcon sx={{color: 'white', marginRight: '15px'}}/>
          <Link sx={{color: 'white'}}  underline='hover' component={RouterLink} to="/admin/category">Category</Link>
        </Box>

        <Box sx={{ display: 'flex', paddingLeft: '10px', alignItems: 'center'}}>
          <PhoneIphoneIcon sx={{color: 'white', marginRight: '15px'}}/>
          <Link sx={{color: 'white'}}  underline='hover' component={RouterLink} to="/admin/product">Product</Link>
        </Box>
      </Stack>
    </Box>
  )
}
