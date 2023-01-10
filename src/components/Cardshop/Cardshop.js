import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';
import { useCart } from 'react-use-cart';


export const Cardshop = ({el}) => {

  const { name, price, image } = el;
  const { token } = React.useContext(AuthContext)
  const { addItem } = useCart();

  const navigate = useNavigate();

  const handleCard = () => {
    if(token){
      addItem(el)
    }else{
      navigate('/login')
    }
  }

  return (
    <Card sx={{ width: 240, marginBottom: 4, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>

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
        <Button onClick={() => handleCard()} type='button' variant="contained" size="small" 
        endIcon={<AddShoppingCartIcon sx={{color: 'white'}}/>}>Buy</Button>
      </CardActions>

    </Card>
  );
}
