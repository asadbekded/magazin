import { Paper, Typography, Link, TextField, Stack, MenuItem, InputAdornment, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { UserContext } from "../../context/user-context";

export const Register = () => {

  const [ inputType, setInputType ] = useState(false)
  const navigate = useNavigate();

  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const schema = Yup.object({
    first_name: Yup.string().required('Required!!'),
    last_name: Yup.string().required('Required!!'),
    email: Yup.string().email('Invalid email').required('Required!!'),
    password: Yup.string().min(3, "3 tadan ko'p kiriting").max(8, "8 tadan kam kiriting").required('Required!!'),
    gender: Yup.string().required('Required!!'),
  })

  const { register, handleSubmit, formState, formState:{errors, isValid}} = useForm({
    mode: 'all',
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      gender: '',
    },
    resolver: yupResolver(schema)
  });

  return( 
  <Paper sx={{ width: "30%", marginX: "auto", marginTop: 15, padding: "32px", }}>
    <Typography variant='h4' component='h2' textAlign='center' marginBottom='7px'>Register</Typography>
    <Typography marginBottom='15px' textAlign='center' variant='body2'>Sizda akkaunt bormi ? <Link marginLeft='10px' underline='hover' component={RouterLink} to="/login">Login</Link></Typography>

    <form onSubmit={handleSubmit((data) => {
      axios.post('http://localhost:8080/register', data)
      .then(res => {
        if(res.status === 201){
          setToken(res.data.accessToken);
          setUser(res.data.user);
          navigate('/')
        }
      })
      .catch(err => console.log(err));
    })}>
      <Stack spacing={2}>
        <TextField {...register('first_name')} 
        type='text' label='First name' 
        helperText={errors.first_name?.message}
        error={errors.first_name ? true : false}/>

        <TextField {...register('last_name')} type='text' label='Last name'
        helperText={errors.last_name?.message}
        error={errors.last_name ? true : false}/>

        <TextField {...register('email')} type='email' label='Email'
        helperText={errors.email?.message}
        error={errors.email ? true : false}/>

        <TextField {...register('password')} type={inputType ? 'text' : 'password'} label='Password' 
        InputProps={{endAdornment: <InputAdornment position="end" onClick={() => setInputType(!inputType)}> 
        {inputType ? <VisibilityIcon cursor='pointer' color='primary'/>  : <VisibilityOffIcon cursor='pointer' color='primary'/>}
        </InputAdornment>}}
        helperText={errors.password?.message} 
        error={errors.password ? true : false}/>

        <TextField {...register('gender')} label='Gender' select 
        helperText={errors.gender?.message}
        error={errors.gender ? true : false}>
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
        </TextField>
        
        <Button disabled={!isValid} variant="contained" type="submit">Send</Button>
      </Stack>
    </form>
  </Paper>
  )
  
}