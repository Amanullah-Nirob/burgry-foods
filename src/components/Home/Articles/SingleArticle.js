import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = ({card}) => {
    const {img,name,dis}=card
    return (
        <Grid item xs={12} md={4}  data-aos="fade-up" data-aos-duration="1700">
        <div className='article-card'>
            <img src={img} alt="" />
        <div className='article-card-text'>
            <h2>{name}</h2>
            <p>{dis}</p>
           <Link to='/article-details'>
           <button>Read more</button>
           </Link>
        </div>
        </div>
    </Grid>
    );
};

export default SingleArticle;