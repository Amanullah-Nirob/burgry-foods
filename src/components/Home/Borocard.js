import { Container, Grid } from '@mui/material';
import React from 'react';

const Borocard = () => {
    return (
        <div className='accsilentfood'>
        <Container>
   
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} className="col-lg-6 col-md-12 col-12">
                    <div className="left-food">
                        <div className='foodtext'>
                            <p>Payday promo</p>
                            <h4>GET A 10% DISCOUNT ON PAYDAY WEEK</h4>
                      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                      <span>Buy Online</span>
                 
                        </div>
                        <div>
                            <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/flying-burger-isolated-on-white-background.png" alt="" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} className="col-lg-6 col-md-12 col-12">
                    <div className="left-food b">
                        <div className='foodtext'>
                            <p>Payday promo</p>
                            <h4>BUY 1 COKE GET MORE FREE 1 COKE</h4>
                      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                      <span>Buy Online</span>
                 
                        </div>
                        <div>
                            <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/P44F4RZ-1.png" alt="" />
                        </div>
                    </div>
                </Grid>
            </Grid>

   
        </Container>
    </div>

    );
};

export default Borocard;