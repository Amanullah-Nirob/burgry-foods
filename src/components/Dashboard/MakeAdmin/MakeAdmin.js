import React, { useRef } from 'react';
import './MakeAdmin.css'
import {Container,Grid} from '@mui/material'
const MakeAdmin = () => {

  const emailRef=useRef()

const fromsubmit=(e)=>{
e.preventDefault()

const email=emailRef.current.value
const adminsUser={email}
fetch(`https://floating-shore-46558.herokuapp.com/User`,{
    method:'put',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body:JSON.stringify(adminsUser)
})
.then(res=>res.json())
.then(data=>{
    if(data.modifiedCount>0){
        alert(`update successfully`)
    }
})
}

    return (
      <div>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <div className='makeAdmin'>
               <div className='makeAdmin-title'>
                   <h2>Make Admin</h2>
               </div>

            <form onSubmit={fromsubmit}>
                <input type="email" placeholder='Email' ref={emailRef} />
                <input type="submit" value="Submit" />
            </form>

            </div>
          </Grid>
          </Grid>
        
      </div>
    );
};

export default MakeAdmin;