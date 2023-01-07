import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';

export const Cardshop = () => {

  return (
    <Box sx={{paddingTop: 2, paddingBottom: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}} >
      <Card sx={{ maxWidth: 300, marginBottom: 4}}>

      <CardMedia
        sx={{ height: 170 }}
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WHSL2wpkBCTdl7u4uXbixaUI8_8Ge-w&usqp=CAU'
        title="phone img"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Iphone
        </Typography>
        <Typography variant="body3">1400$</Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>


      <CardActions>
        <Button variant="contained" size="small">Add +</Button>
      </CardActions>

      </Card>

      <Card sx={{ maxWidth: 300, marginBottom: 4}}>

<CardMedia
  sx={{ height: 170 }}
  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WHSL2wpkBCTdl7u4uXbixaUI8_8Ge-w&usqp=CAU'
  title="phone img"
/>

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Iphone
  </Typography>
  <Typography variant="body3">1400$</Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>


<CardActions>
  <Button variant="contained" size="small">Add +</Button>
</CardActions>

      </Card>

      <Card sx={{ maxWidth: 300, marginBottom: 4}}>

<CardMedia
  sx={{ height: 170 }}
  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WHSL2wpkBCTdl7u4uXbixaUI8_8Ge-w&usqp=CAU'
  title="phone img"
/>

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Iphone
  </Typography>
  <Typography variant="body3">1400$</Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>


<CardActions>
  <Button variant="contained" size="small">Add +</Button>
</CardActions>

      </Card>

      <Card sx={{ maxWidth: 300, marginBottom: 4}}>

<CardMedia
  sx={{ height: 170 }}
  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WHSL2wpkBCTdl7u4uXbixaUI8_8Ge-w&usqp=CAU'
  title="phone img"
/>

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Iphone
  </Typography>
  <Typography variant="body3">1400$</Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>


<CardActions>
  <Button variant="contained" size="small">Add +</Button>
</CardActions>

      </Card>

      <Card sx={{ maxWidth: 300, marginBottom: 4}}>

<CardMedia
  sx={{ height: 170 }}
  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4h2WHSL2wpkBCTdl7u4uXbixaUI8_8Ge-w&usqp=CAU'
  title="phone img"
/>

<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    Iphone
  </Typography>
  <Typography variant="body3">1400$</Typography>
  <Typography variant="body2" color="text.secondary">
    Lizards are a widespread group of squamate reptiles, with over 6,000
    species, ranging across all continents except Antarctica
  </Typography>
</CardContent>


<CardActions>
  <Button variant="contained" size="small">Add +</Button>
</CardActions>

      </Card>
    </Box>
  );
}
