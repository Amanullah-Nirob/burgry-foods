import { Button, CircularProgress, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Register = () => {
const {registerFunction,isLoading}=UseAuth()
const [userInfo,setUserInfo]=useState({})
   const handleOnChange=(e)=>{
    const filed=e.target.name;
    const value=e.target.value;
       const newUserInfo={...userInfo}
       newUserInfo[filed]=value
       setUserInfo(newUserInfo)
   }

const navigate=useNavigate()


   const formSubmit=(e)=>{
     e.preventDefault()
   console.log(userInfo);
   registerFunction(userInfo.email,userInfo.password,userInfo.name,navigate)
   }

    return (
        <div className='authentication-area'>
        <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
             { !isLoading && <div className="Authentication-form">
                   <h2>Register form</h2>
                   <form onSubmit={formSubmit}>
                       <input onChange={handleOnChange} name='name' type="name" placeholder='FullName' />
                       <input onChange={handleOnChange} name='email' type="email" placeholder='Email' />
                       <input onChange={handleOnChange} name='password' type="password" placeholder='Password' />
                       <input type="submit" value="Submit" />
                   </form> 
              
                   <Link to='/login'>
                       <Button>Already Register? Login Now</Button>
                   </Link>
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

export default Register;
