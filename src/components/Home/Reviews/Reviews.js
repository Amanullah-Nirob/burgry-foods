import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Reviews.css'
import Slider from "react-slick";
import Review from './Review';
import LeftArrow from "../../../assets/left-arrow.svg"
import RightArrow from "../../../assets/right-arrow.svg"
 
const Reviews = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`https://floating-shore-46558.herokuapp.com/reviews`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
 
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="prevArrow" {...props}/>
      );
    
      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="nextArrow" {...props} />
      );
      
        const settings = { 
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
          initialSlide: 0,
          prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };



    return (
        <div className='reviews'>
            <Container>

            <div className='reviews-title'>
   <h1>CUSTOMER REVIEW</h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />  Aenean.eget dolor.  Aenean.</p>
</div>
    { data.length===0 ?
    <CircularProgress sx={{margin:'auto',display:'block'}} />
    :<Slider {...settings} className="card__container--inner">
              
            
              {
                data.map((x)=><Review card={x}/>)
              } 
      

        </Slider>
 }
               
            </Container>

            <div></div>
        </div>
    );
};

export default Reviews;