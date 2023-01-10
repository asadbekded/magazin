import { Delete, Edit } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export const ProductCard = ({el}) => {

  const { name, price, image } = el;

  return (
    <Card sx={{ width: 250, marginBottom: 4, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>

      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title="phone img"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body3">Price: {price}$</Typography>
      </CardContent>


      <CardActions>
        <Button color='warning' variant="contained" size="small" endIcon={<Edit/>}>Edit</Button>
        <Button color='error' variant="contained" size="small" endIcon={<Delete/>}>Del</Button>
      </CardActions>

    </Card>
  )
}