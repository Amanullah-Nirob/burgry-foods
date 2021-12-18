import { Grid } from '@mui/material';
import React from 'react';

const Review = ({card}) => {
    const {img,title,name,dis}=card
    return (
    
                      <div className="review-card">
                          <div className='reviews-description'>
                              <p>{dis}</p>
                          </div>
                          <div className='reviews-user-intro'>
                              <div className='review-user'>
                                  <div className='review-user-image'>
                                      <img src={`data:image/jpeg;base64,${img}`} alt="" />
                                  </div>
                                  <div className='review-user-name-title'>
                                      <h3>{name}</h3>
                                      <p>{title}</p>
                                  </div>
                              </div>
                              <div className='review-box-image'>
                              <i aria-hidden="true" class="fas fa-quote-right"></i>
                              </div>
                          </div>
                      </div>
           
    );
};

export default Review;