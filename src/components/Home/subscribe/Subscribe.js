import { Container, Grid } from '@mui/material';
import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className='subscribe'   data-aos="flip-down" data-aos-duration="1700">
            <Container>
               <Grid container spacing={2}>
                 <Grid item xs={12} md={5}>
                   <div className='subscribe-title'>
                       <h1>GET EXCLUSIVE UPDATE</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                   </div>
                 </Grid>
                 <Grid item xs={12} md={7}>
                        <div className="subscribe-form">
                          <form>
                              <Grid container spacing={2}>
                                  <Grid item xs={12} md={8}>
                                      <div className='email-input'>
                                      <input type="email" placeholder='Email' />
                                      </div>
                                      </Grid>
                                  <Grid item xs={12} md={4}>
                                      <div className='subscribe-btn'>
                                      <button>Subscribe</button>
                                      </div>
                                      </Grid>

                              </Grid>
                              
                             
                          </form>
                        </div>
                 </Grid>
               </Grid> 
            </Container> 
        </div>
    );
};

export default Subscribe;