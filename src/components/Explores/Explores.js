import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ServiceCard1 from '../Home/ServiceCards/ServiceCard1';
import './Explores.css'
const Explores = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch(`https://floating-shore-46558.herokuapp.com/services`)
        .then(response=>response.json())
        .then(data=>setUser(data))
    },[])
 
    return (
        <div className='explore'>
         <Container>
             <div className='explore-title'>
                 <h2>all products</h2>
             </div>
         {user.length===0?<CircularProgress  sx={{display:'block',margin:'auto'}}/>:
            <Grid container spacing={{ xs: 2, md: 3 }} >
            {
            user.map((x)=><ServiceCard1 key={x._id} card={x} />)
            }
            </Grid>}
        </Container>

        </div>
    );
};

export default Explores;