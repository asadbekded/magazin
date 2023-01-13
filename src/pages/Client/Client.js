import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Cardshop } from '../../components/Cardshop/Cardshop';
import { Box } from '@mui/material';
import axios from 'axios';
import { useCart } from 'react-use-cart';


export const Client = () => {

  const [ product, setProduct ] = useState([]);
  const { totalItems, isEmpty, cartTotal, emptyCart, id, items } = useCart();

  const getProducts = async () => {
    axios.get('http://localhost:8080/products')
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Box>
      <Header totalItems={totalItems} isEmpty={isEmpty} cartTotal={cartTotal} emptyCart={emptyCart} items={items} id={id}/>
      <Box sx={{width: '100%' ,paddingLeft: '35px', paddingRight: '35px'}}>
        
        <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}} >
          {
            product.map(el => (
              <Cardshop key={el.id} el={el}/>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}
