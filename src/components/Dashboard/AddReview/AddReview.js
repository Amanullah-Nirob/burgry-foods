import React, { useRef,useState } from 'react';
import {  Container, Grid } from '@mui/material';
import UseAuth from '../../../Hooks/UseAuth';
import swal from 'sweetalert';
import './AddReview.css'

const AddReview = () => {
const {user}=UseAuth()

   const [name,setName]=useState('')
   const [title,setTitle]=useState('')
   const [img,setImg]=useState(null)
   const [dis,setDis]=useState('')


  

    const formSubmit=(e)=>{
        e.preventDefault()
        const formData = new FormData();

        formData.append('img',img);
        formData.append('name',name);
        formData.append('title',title);
        formData.append('dis',dis);
   

         // 
    fetch(`https://floating-shore-46558.herokuapp.com/reviews`,{
        method: 'post',
         body: formData
    })
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        swal("Good Job", "your order successfully added", "success");
        // e.target.reset()
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

                    <input type="text" placeholder='Name' onChange={e=>setName(e.target.value)}  /> 
                         <input type="text" placeholder='Title' onChange={e=>setTitle(e.target.value)}  />  
                         <input   type="file" placeholder='image URL' onChange={e=>setImg(e.target.files[0])}  /> 
                          <div className='text-area'>
                          <textarea onChange={e=>setDis(e.target.value)}   cols="30" rows="10"></textarea> 
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