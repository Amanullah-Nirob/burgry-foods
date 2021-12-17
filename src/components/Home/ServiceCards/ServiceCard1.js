import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard1.css'
const ServiceCard1 = (props) => {
  const {img,dis,price,name,_id}=props.card

    return (
<Grid item xs={6} md={3}>
<div className="single-card" data-aos="fade-up" data-aos-duration="1000" >
<div>
        <div >

<div className='enter-card'>
<div className='card-img-area'>
          <img alt='' id='card-img' src={img} />
          </div>
</div>
          <div className='service-card-text'>
            <div><h3>{name}</h3></div>
            <div>
            <p>{dis}</p>
        <div className="price-and-link">
        <h5>${price}</h5>
        <Link  className='first-link' to={`/ServiceCard1/${_id}`}>add to cart</Link>
        </div>
</div>

          </div>
          

        </div>

      </div>

</div>
</Grid>
    );
};

export default ServiceCard1;