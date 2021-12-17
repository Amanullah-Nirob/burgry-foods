import React, { useRef } from 'react';
import {  Container, Grid } from '@mui/material';
import UseAuth from '../../../Hooks/UseAuth';
import swal from 'sweetalert';
import './AddReview.css'

const AddReview = () => {
const {user}=UseAuth()

    const nameRef=useRef()
    const emailRef=useRef()
    const imgRef=useRef()
    const RatingRef=useRef()
    const disRef=useRef()

    const formSubmit=(e)=>{
        e.preventDefault()
           const name=nameRef.current.value;
           const title=emailRef.current.value;
           const img=imgRef.current.value;
           const dis=disRef.current.value;
           const rating=RatingRef.current.value;

           const data={name,title,dis,img,rating}
         
    fetch(`https://floating-shore-46558.herokuapp.com/reviews`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },
    
          body:JSON.stringify(data)
    })
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        swal("Good Job", "your order successfully added", "success");
        e.target.reset()
    }
})

}




    return (
        <div className='review-form-area'>
           <Container>
           <div className="ourworks-title r">
           <h3>Reviews</h3>
            <h1>Give reviews based on your personal opinion</h1>
           </div>

               <Grid container spacing={3}>

                   <Grid item xs={12} md={6}>
                    <div className='review-form'>
                     <h1>Review form</h1>
                    <form onSubmit={formSubmit}>
                    <input ref={nameRef}  type="text" placeholder='Name'/> 
                         <input ref={emailRef} type="text" placeholder='Title' />  
                         <input ref={RatingRef}  type="number" placeholder='Rating'  /> 
                         <input ref={imgRef}  type="text" placeholder='image URL'  /> 
                          <div className='text-area'>
                          <textarea ref={disRef} cols="30" rows="10"></textarea> 
                          </div>
                        <input type="submit" value="Submit" />
                     </form>

                    </div>
                   </Grid>

                   

                   <Grid item xs={12} md={6}>
                    <div className="review-box-images">
                    <img src="https://i.ibb.co/2qf0422/5360730-removebg-preview.png" alt="" />
                    </div>
                   </Grid>
               </Grid>
           </Container>
        </div>
    );
};

export default AddReview;