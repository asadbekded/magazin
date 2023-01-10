import { Delete } from '@mui/icons-material';
import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import React from 'react';
import { useCart } from 'react-use-cart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const CardCard = ({ item }) => {
    const { name, price, id, quantity } = item;
    const { updateItemQuantity, removeItem} = useCart();

  return (
    <ListItem divider sx={{display: 'block'}}>
        <Stack mb='10px' direction={'row'} spacing={1}>
            <ListItemAvatar>
                <Avatar></Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={`${price}$`}/>
        </Stack>
        <Box>
            <Stack mb='10px' direction={'row'} spacing={2}>
            
                <Button onClick={() => updateItemQuantity(id, quantity - 1)} variant='contained' color='success' size='small'>
                    <RemoveIcon/>
                </Button>

                <Button variant='contained' size='small'>{quantity}</Button>

                <Button onClick={() => updateItemQuantity(id, quantity + 1)} variant='contained' color='success' size='small'>
                    <AddIcon/>
                </Button>

                <Button onClick={() => removeItem(id)} variant='contained' color='error' size='small'>
                  <Delete/>
                </Button>
            </Stack>
        </Box>
    </ListItem>
  )
}
