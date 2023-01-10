import { Box, Button, DialogActions, DialogContent, MenuItem, Stack, Tab, Tabs, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import axios from 'axios';

export const Product = () => {

  const [ product, setProduct ] = useState([]);
  const [ categoryCard, setCategoryCard ] = useState([]);
  const [ productModal, setProductModal ] = useState(false);

  const nameRef = useRef();
  const priceRef = useRef();
  const imgRef = useRef();
  const categoryRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault()

    axios.post('http://localhost:8080/products', {
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: imgRef.current.value,
      category_id: categoryRef.current.value,
    }).then(res => {
      if(res.status === 201){
        setProductModal(false)
        console.log(res)
      }
    })
    .catch(err => console.log(err))
  };

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    axios.get('http://localhost:8080/products?category_id=' + value)
    .then(res => setCategoryCard(res.data))
    .catch(err => console.log(err))
  }, [value])


  const getCategory = async () => {
    axios.get('http://localhost:8080/category')
    .then(res => {
      if(res.status === 200){
          setProduct(res.data)
        }
      })
    .catch(err => console.log(err))
  }
  useEffect(() => {
    getCategory()
  }, [])
  
  const handleChange = ( evt ) => {
    setValue(+evt.target.attributes.tabIndex.nodeValue);
  };

  return (
    <Box>
      <Button onClick={() => setProductModal(true)} sx={{marginBottom:'24px'}} variant='contained' endIcon={<AddIcon/>}>Add product</Button>
      
      <Box sx={{ width: '100%'  }}  >

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            product.map(el => (
              <Tab key={el.id} value={el.id} tabIndex={el.id} label={el.category_name} id={`simple-tab-${el.id}`}/>
            ))
          }
        </Tabs>
      </Box>
      <Box  stickyHeader aria-label="sticky table" sx={{maxHeight: 440}} className='box-flow'>
      {
        product.map(el => ( 
          <Box sx={{marginTop: '5px'}} key={el.id} role="tabpanel" hidden={value !== el.id} value={value} index={el.id}>
          <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            {
              categoryCard.map(item => (
                <ProductCard key={item.id} el={item}/>
              ))
            }
          </Box>
          </Box>
        ))
      }
      </Box>

      </Box>

      <Modal modal={productModal} title='Add product' setModal={setProductModal}>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Stack spacing={2}>
                <TextField inputRef={nameRef} sx={{width: '400px'}} label='Product name'/>
                <TextField inputRef={priceRef} sx={{width: '400px'}} label='Product price'/>
                <TextField inputRef={imgRef} sx={{width: '400px'}} label='Product img'/>
                <TextField inputRef={categoryRef} sx={{width: '400px'}} label='Product category' select>
                 {
                   product.map(el => (
                    <MenuItem key={el.id} value={el.id}>{el.category_name}</MenuItem>
                   ))
                 }
                </TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button type='submit' color='success' variant='contained' >Add product</Button>
          </DialogActions>
        </form>
      </Modal>
    </Box>
  )
}