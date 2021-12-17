import { Container, Grid } from '@mui/material';
import React from 'react';

const AboutSimple = () => {
    return (
        <div className='about-simple-part'>
        <Container>
            <Grid container spacing={4}>
            <Grid item xs={12} md={6} data-aos="fade-right"  data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='left-images'>
            <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/homemade-beef-burger-caramelized-onion-bacon-and-beer-e1627971449244.jpg" alt="" />
                </div>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left"  data-aos-offset="300" data-aos-easing="ease-in-sine">
                <div className='rights-content'>
                    <div>
                        <h1>FIND YOUR BEST TASTED FOOD & DRINKS JUST IN ONE PLACE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                    </div>
                    
                <div className='introduction-area'>
                <div className='introduction'>
                        <div className='intruductionMain'>
                            <div><i class="fas fa-check"></i></div>
                            <div><p>Best Price</p></div>
                        </div>
                        <div className='intruductionMain'>
                            <div><i class="fas fa-check"></i></div>
                            <div><p>Fresh Ingredient</p></div>
                        </div>
                        </div>
                <div className='introduction'>
                        <div className='intruductionMain'>
                            <div><i class="fas fa-check"></i></div>
                            <div><p>Best Service</p></div>
                        </div>
                        <div className='intruductionMain'>
                            <div><i class="fas fa-check"></i></div>
                            <div><p>Healths Protocol</p></div>
                        </div>
                    </div>
            
                    </div>
                    <div className='introduction-btn'>
                        <button>about us</button>
                    </div>
                    
                    
                </div>
            </Grid>
            </Grid>
        </Container>
    </div>
    );
};

export default AboutSimple;