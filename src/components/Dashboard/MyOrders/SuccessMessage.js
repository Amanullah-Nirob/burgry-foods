import { Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './Success.css'

const SuccessMessage = () => {

  

    return (
        <div style={{paddingTop:'25px'}}>
          <Container>
          <Grid container spacing={2}>
              <Grid item xs={12} md={12}>

              <div className='success-details'>
              <img className='success-img' src="https://red-onion-restaurant-41dbe.web.app/static/media/ordersuccess.bd98683e.png" alt="" />
              <Link to='/home'>
              <img src="https://img.icons8.com/fluency/30/000000/long-arrow-left.png" alt=''/>
                  <h4>Back to home</h4>
              </Link>
          </div>
       
              </Grid>
          </Grid>
          </Container>
        </div>
    );
};

export default SuccessMessage;