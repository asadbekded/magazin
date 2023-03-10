import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Orders = () => {
  const [ products, serProducts ] = useState([]);

  const getProducts = async  () => {
    axios.get('http://localhost:8080/orders')
    .then(res => {
      if(res.status === 200){
        console.log(res.data)
        serProducts(res.data)
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box>
      <Paper sx={{ width: '100%'  }}>
        <TableContainer className='box-flow' sx={{ maxHeight: 550 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>ID</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Name</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Email</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Products</TableCell>
                        <TableCell sx={{backgroundColor:'gray', color: 'white'}}>Price</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>
                  {
                    products.map(el => (
                      <TableRow key={el.id}>
                        <TableCell>{el.id}</TableCell>
                        <TableCell>{el.user_name}</TableCell>
                        <TableCell>{el.user_email}</TableCell>
                        {
                          el.products.map(item => (
                            
                            <TableCell key={item.id} >
                              <Box sx={{ display: 'flex' }}>
                                <Box><img sx={{height:"10px"}} src={item.image} alt="img" width={40} height={10}/></Box>
                                <Box>
                                  <Typography>{item.name}</Typography>
                                  <Typography>Price: {item.price}$</Typography>
                                </Box>
                              </Box>
                              <Typography>{`${item.price}$ x ${item.quantity} = ${item.itemTotal}$`}</Typography>

                            </TableCell>
                          ))
                        }
                        <TableCell>{el.total_price}$</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
            </Table>
        </TableContainer>
        </Paper>
    </Box>
  )
}