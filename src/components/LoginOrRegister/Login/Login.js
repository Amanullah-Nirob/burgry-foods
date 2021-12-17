import { Alert, Button, CircularProgress, Container, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import UseAuth from '../../../Hooks/UseAuth';
import './Login.css'
const Login = () => {

const {loginFunction,isLoading,error2}=UseAuth()
const [userInfo,setUserInfo]=useState({})
   const handleOnChange=(e)=>{
    const filed=e.target.name;
    const value=e.target.value;
       const newUserInfo={...userInfo}
       newUserInfo[filed]=value
       setUserInfo(newUserInfo)
   }
   const location=useLocation()
   const navigate=useNavigate()

   const formSubmit=(e)=>{
     e.preventDefault()
   console.log(userInfo);
   loginFunction(userInfo.email,userInfo.password,location,navigate)
}


 




    return (
        <div className='authentication-area'>
        <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
           { !isLoading  && <div className="Authentication-form">
                   <h2>Login form</h2>
                   <form onSubmit={formSubmit}>
                       <input onChange={handleOnChange} name='email' type="email" placeholder='Email' />
                       <input onChange={handleOnChange} name='password' type="password" placeholder='Password' />
                       <input type="submit" value="Submit" />
                   </form> 
              
                   <Link to='/register'>
                       <Button>New User? register now</Button>
                   </Link>
                   {error2 && <Alert severity="error">{error2}</Alert>}

               </div>}

               {isLoading && <CircularProgress sx={{margin:'auto',display:'block'}} />}

          </Grid>
          <Grid item xs={12} md={6}>
             <div className='authentication-form-img'>
                 <img src="https://i.ibb.co/fSbY41Y/4972-jpg-wh860-removebg-preview.png" alt="" />
             </div>
          </Grid>
       </Grid>
        </Container>
         
        </div>
    );
};

export default Login;