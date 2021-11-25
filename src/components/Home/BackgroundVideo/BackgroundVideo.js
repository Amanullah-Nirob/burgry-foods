import { Container } from '@mui/material';
import React from 'react';
import video from '../../../video/foodvideo.mp4'
import './Background.css'
const BackgroundVideo = () => {
    return (
        <div className='backgotund-area'>
          
                 <div  className="container area">
                <div className='bac-icon'><i className="fas fa-play"></i></div>
              <h1>WE SERVE YOU THE BEST</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
              </div>
     
            <div className="video-container">
            <div className="overley"></div>
                <video src={video} autoPlay loop muted></video>
              
            </div>
            
            
        </div>
    );
};

export default BackgroundVideo;