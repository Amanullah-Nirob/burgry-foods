import { Container, Grid } from '@mui/material';
import React from 'react';

const Downloads = () => {
    return (
        <div className='downloads'>
        <Container>
            <Grid container spacing={7}>
                
                <Grid item xs={12} md={6} data-aos="fade-right"  data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className='simple-contact-left'>
                        <img src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/food-Clay-01.jpg" alt="" />
                    </div>
                </Grid>
                
                
                <Grid item xs={12} md={6} data-aos="fade-left"  data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div className='simple-contact-right'>
                        <div className='simple-contact-right-text'>
                            <h1>DON'T WORRY ! YOU CAN ORDER YOUR FOOD JUST BY PHONE</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                        </div>
                    </div>
                      <div>
                      <div className='simple-contact-right-box'>
                        <div className='simple-contact-right-box-area'>
                            <div className='i-box'>
                            <i class="fas fa-truck"></i>
                            </div>
                            <div className='box-content'>
                                <h3>FREE DELIVERY</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                    <div className='simple-contact-right-box a'>
                        <div className='simple-contact-right-box-area'>
                            <div className='i-box'>
                            <i class="fas fa-money-bill-wave"></i>
                            </div>
                            <div className='box-content'>
                                <h3>SPECIAL PROMO</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                      </div>
                 <div className="download" >
                        <div className='download-image'>
                            <img src="https://www.programming-hero.com/img/google-play.svg" alt="" />
                        </div>
                  
                        <div className='download-image'>
                            <img src="https://www.programming-hero.com/img/istore.svg" alt="" />
                        </div>
             
                      
             
                 </div>
               
                    
                    
                </Grid>
            </Grid>
        </Container>
    </div>
    
    );
};

export default Downloads;