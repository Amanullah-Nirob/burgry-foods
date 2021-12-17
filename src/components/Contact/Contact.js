import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import './Contact.css'
import { CircularProgress, Container, Grid } from '@mui/material';
import swal from 'sweetalert';
  
const Contact = () => {

    const [state, handleSubmit] = useForm("mayvwdlr");
    if (state.succeeded) {
        swal("Good Job", "Thanks for joining", "success");
    }
  
    return (
        <div className='contact-form-section'>
            <Container>
                   <h1 className='contact-title'>Contact Us</h1>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={6}>
                   <div className='contact-image'>
                       <img src="https://i.ibb.co/YpZKKCT/istockphoto-1248597505-1024x1024-removebg-preview.png" alt="" />
                   </div>
                
                </Grid>
                 {state.submitting? <CircularProgress />:<Grid item xs={12} md={6} sm={6}>
                        <div className='contact-form'>
                        <form onSubmit={handleSubmit}>
                        <input type="name"  name="name" placeholder='Name'/>
                        <input type="email"  name="email" placeholder='Email'/>
                        <input type="text"  name="Subject" placeholder='Subject'/>
                        <textarea name="message" placeholder='message'  cols="30" rows="10"></textarea>
                        <input type="submit" value='submit' />
                        </form>
                        </div>
                    </Grid>}
                </Grid>
            </Container>
     
        </div>
    );
};

export default Contact;