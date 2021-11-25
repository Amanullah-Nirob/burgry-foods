import { Button, Container, Grid } from '@mui/material';
import React from 'react';
//       <div className='Main-home-all-contents'></div>

const MainHome = () => {
    return (
        <div className='home'>
        <Container className="container">
         <div className="home-banner">
         <Grid container spacing={4}>
       
       {/* left image */}
   <Grid item  xs={12} md={6} data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
   <div className='home-img'> <img  src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/N2HMMGN-2.png" alt="" /></div>
   </Grid>
   {/* right content */}
   <Grid item  xs={12} md={6} className='text-white' id='home-right'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="100">
      <div className="home-right-text">
      <div className="text">
       <h1>ENJOY BURGRY MAKE YOUR TUMMY HAPPY</h1>
       <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes montes.</p>
   </div>
<div className='home-icons'>
 <div>
 <i class="fas fa-utensils ms-2"></i>
 <h3>Delicious</h3>
 </div>
 <div className='text-center'>
 <i class="fas fa-tint"></i>
 <h3>Fresh</h3>
 </div>
 <div className=''>
 <i class="fas fa-leaf"></i>
 <h3>Organic</h3>
</div>
</div>
<div className='btn-area'>
<button id='btn'  variant="warning mt-5 mb-1">explore</button>
</div>
</div>
   </Grid>

        </Grid>
         </div>
   
   
    </Container>
</div>
    );
};

export default MainHome;