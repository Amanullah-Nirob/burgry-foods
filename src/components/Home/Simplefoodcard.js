import { Container, Grid } from '@mui/material';
import React from 'react';

const Simplefoodcard = () => {
    return (
        <div>
            <div className='my-card'>
      <Container>
     <div className="row breket">
     <Grid container spacing={3}>
              <Grid item xs={12} md={4} className="a"> 
                  <div className="box">
                      <div className='food-card-img'>
                          <img  src='https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/cheeseburger.png' alt="" />
                      </div>
                      <div className='box-text'>
                          <h5>FOOD</h5>
                          <p>Lorem ipsum dolor sit.</p>
                         <span>buy online</span>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={4} className="a">
                  <div className="box b">
                      <div>
                          <img  src='https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/QCFS4BS-x.png' alt="" />
                      </div>
                      <div className='box-text'>
                          <h5>SNACK</h5>
                          <p>Lorem ipsum dolor sit.</p>
                         <span>buy online</span>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={12} md={4} className="a">
                  <div className="box c">
                      <div>
                          <img  src='https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/PNNSUD7-2.png' alt="" />
                      </div>
                      <div className='box-text'>
                          <h5>BEVERAGE</h5>
                          <p>Lorem ipsum dolor sit.</p>
                         <span>buy online</span>
                      </div>
                  </div>
              </Grid>
          </Grid>
     </div>
      </Container>
  </div>
        </div>
    );
};

export default Simplefoodcard;