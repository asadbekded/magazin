import { Avatar, Box } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Category } from '../Category/Category';
import { Orders } from '../Orders/Orders';
import { Product } from '../Product.js/Product';
import ApexChart from '../../components/Diagrama/Diagrama';

export const Admin = () => {
  return (
    <Box sx={{ display: 'flex'}}>
      <Box sx={{ width:'200px'}}>
        <Sidebar/>
      </Box>
      
      <Box  sx={{ width:'100%' }}>
       <Box component='header'>
        <Box sx={{ maxWidth:'100%', display:"flex", backgroundColor:'gray', padding:'15px', textAlign: 'right'}}>
          <Box>
            <Avatar sx={{ color:'white', backgroundColor:'blue', marginLeft: '1100px'}} >AD</Avatar>
          </Box>
        </Box>
       </Box>

       <Box sx={{padding: '15px'}}>
        <Routes>
          <Route index element={<ApexChart/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
       </Box>
      </Box>
    </Box>
  )
}
