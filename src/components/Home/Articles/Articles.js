import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Articles.css'
import SingleArticle from './SingleArticle';
const Articles = () => {
   
const [articles,setArticles]=useState([])
 
   useEffect(()=>{
       fetch(`data/Data4.json`)
       .then(res=>res.json())
       .then(data=>setArticles(data))
   },[])

    return (
        <div className='articles-section'>
            <Container>
            <div className='reviews-title'>
   <h1>CUSTOMER REVIEW</h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />  Aenean.eget dolor.  Aenean.</p>
</div>
        <Grid container spacing={3}>
                {
                    articles.map((x)=><SingleArticle card={x}/>)
                }
        </Grid>
            </Container>
        </div>
    );
};

export default Articles;