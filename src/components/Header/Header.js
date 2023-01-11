import { AppBar, Avatar, Container, Toolbar, IconButton, Box, Link, Drawer, Badge, Stack, Button, Typography, Collapse, List  } from '@mui/material'
import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink} from 'react-router-dom';
import { Close, Delete, Done } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import { CardCard } from '../CardCard/CardCard';
import { UserContext } from '../../context/user-context';
import { Modal } from '../Modal/Modal';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import { AuthContext } from '../../context/auth-context';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


export const Header = ({totalItems, isEmpty, cartTotal, emptyCart, id, items}) => {
  const [ orderModal, setOrderModal ] = useState(false);
  const [ drawer, setDrawer ] = useState(false);
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    emptyCart(id)
    setDrawer(false)
  }
  const { user } = useContext(UserContext);
  const { token } = useContext(AuthContext);

  const handleOrder = () => {

    axios.post('http://localhost:8080/orders', {
      user_id: user.id,
      user_name: user.first_name,
      user_email: user.email,
      products: items,
      total_price: cartTotal,
    }).then(res => {
      if(res.status === 201){
        setOrderModal(false);
        setDrawer(false);
        emptyCart(id);
      }
    })
    .catch(err => console.log(err))

  }

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRemove = () => {
    handleDelete()
    localStorage.removeItem('user', user)
    localStorage.removeItem('token', token)
    window.location.reload()
    setOpen(false)
  }


  

  return (
    <AppBar position='static'>
        <Container maxWidth="xl">
            <Toolbar sx={{paddingTop: 2, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} disableGutters>
                <Box>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Stop_%26_Shop_Logo.svg' alt='site logo' width={150} height={50}/>
                </Box>

                <Box sx={{flexGrow: 0}}>
                    <Box sx={{ display:'flex',  alignItems: 'center' }}>
                      <Link sx={{color: 'white'}}  underline='hover' component={RouterLink} to="/login">Login</Link>

                      <Badge badgeContent={totalItems} color="error">
                        <IconButton sx={{marginLeft:'20px', backgroundColor:'white' }} onClick={() => setDrawer(true)}> 
                          <ShoppingCartIcon sx={{color: 'blue'}}/> 
                        </IconButton>

                        <Drawer anchor='right' open={drawer}
                         onClose={() => setDrawer(false)}> 
                         <Box sx={{display: 'flex', flexDirection: 'column',height: '100%'}} padding={2} width= {'410px'}>
                          {
                            isEmpty ? <Typography variant='h6'>Card is empty</Typography> : ''
                          }
                          <Stack sx={{flexGrow:'1'}}>
                            {
                              items.map(el => (
                                <CardCard key={el.id} item={el}/>
                              ))
                            }
                          </Stack>

                          <Stack direction='row' spacing={2}>
                            <Button onClick={() => handleDelete()} variant='contained' color='error' 
                            endIcon={<Delete/>}>Clear</Button>
                            <Button variant='contained' color='warning' >Price: {cartTotal}$</Button>
                            <Button onClick={() => setOrderModal(true)} variant='contained' color='success' endIcon={<SendIcon/>}>Order</Button>
                          </Stack>
                         </Box>
                        </Drawer>
                      </Badge>

                      <Avatar onClick={handleClick} sx={{color:'white', backgroundColor:'teal', marginLeft: '15px'}} > 
                      {user ? user.first_name.charAt(0) + user.last_name.charAt(0) : <PersonAddIcon/> }
                      </Avatar>

                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <Button onClick={handleRemove} variant='outlined' sx={{ pl: 1, pr: 1 }}>
                            <LogoutIcon sx={{color: 'white'}}/>
                          </Button>
                        </List>
                      </Collapse>

                      
                    </Box>
                </Box>
            </Toolbar>
        </Container>
        <Modal modal={orderModal} title='Are you sure?' setModal={setOrderModal}>
          <Stack sx={{padding: '32px'}} direction='row' spacing={2}>
            <Button onClick={() => setOrderModal(false)} variant='outlined' color='error' endIcon={<Close/>}>NO</Button>
            <Button onClick={() => handleOrder()} variant='outlined' color='success' endIcon={<Done/>}>YES</Button>
          </Stack>
        </Modal>
    </AppBar>
  )
}
