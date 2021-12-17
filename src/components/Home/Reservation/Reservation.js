import { Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Reservation.css'
const Reservation = () => {
    return (
        <div className='reservation-section'>
            <Container>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} data-aos="zoom-in"  data-aos-duration="1700" >
                        <div className='reservation-content'>
                            <h1>GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                          <Link to='/reservation'>
                          <button>Book Reservation</button>
                          </Link>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Reservation;