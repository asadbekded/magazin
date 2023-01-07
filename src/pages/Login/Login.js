import { Paper, Typography, Link, TextField, Stack, InputAdornment, Button } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink } from 'react-router-dom';
import { useContext, useState} from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from "axios";
import { AuthContext } from "../../context/auth-context";
import { UserContext } from "../../context/user-context";

export const Login = () => {

  const [ inputType, setInputType ] = useState(false)

  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const schema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required!!'),
    password: Yup.string().min(3, "3 tadan ko'p kiriting").max(8, "8 tadan kam kiriting").required('Required!!'),
  })

  const { register, handleSubmit, formState, formState:{errors, isValid}} = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema)
  });

  return( 
  <Paper sx={{ width: "30%", marginX: "auto", marginTop: 15, padding: "32px", }}>
    <Typography variant='h4' component='h2' textAlign='center' marginBottom='7px'>Login</Typography>
    <Typography marginBottom='15px' textAlign='center' variant='body2'>Sizda akkaunt yo'qmi ? <Link marginLeft='10px' underline='hover' component={RouterLink} to="/register">Register</Link></Typography>

    <form onSubmit={handleSubmit((data) => {
      axios.post('http://localhost:8080/login', data)
      .then(res => {
        if(res.status === 200){
          setToken(res.data.accessToken);
          setUser(res.data.user);
        }
      })
      .catch(err => console.log(err));
    })}>
      <Stack spacing={2}>

        <TextField {...register('email')} type='email' label='Email'
        helperText={errors.email?.message}
        error={errors.email ? true : false}/>

        <TextField {...register('password')} type={inputType ? 'text' : 'password'} label='Password' 
        InputProps={{endAdornment: <InputAdornment position="end" onClick={() => setInputType(!inputType)}> 
        {inputType ? <VisibilityIcon cursor='pointer' color='primary'/>  : <VisibilityOffIcon cursor='pointer' color='primary'/>}
        </InputAdornment>}}
        helperText={errors.password?.message} 
        error={errors.password ? true : false}/>
        
        <Button disabled={!isValid} variant="contained" type="submit">Send</Button>
      </Stack>
    </form>
  </Paper>
  )
  
}