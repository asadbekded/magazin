import { AppBar, Avatar, Container, Toolbar, IconButton, Box, Link } from '@mui/material'
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link as RouterLink} from 'react-router-dom';


export const Header = () => {

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
                      <IconButton sx={{marginLeft:'20px'}}> <AddShoppingCartIcon/> </IconButton>
                      <Avatar sx={{color:'white', backgroundColor:'teal', marginLeft: '15px'}} >AD</Avatar>
                    </Box>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
