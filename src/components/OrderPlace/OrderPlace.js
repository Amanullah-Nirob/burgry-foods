import { Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './OrderPlace.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const OrderPlace = () => {
    const {user}=UseAuth()
    const {kam}=useParams()
    const [service,setService]=useState({})
   useEffect(()=>{
       fetch(`https://floating-shore-46558.herokuapp.com/services/${kam}`)
       .then(res=>res.json())
       .then(data=>setService(data))
   },[])
   

   const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
       if(data.name===''){
           data.name=user.displayName;
       }
       if(data.email===''){
           data.email=user.email;
       }
       if(data.product===''){
           data.product=service.name;
       }
        console.log(data);
    fetch(`https://floating-shore-46558.herokuapp.com/orders`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
       body:JSON.stringify(data)
        
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            swal("Good Job", "your order successfully confirmed", "success");
            reset()
        }

    })
   
   }

   const date=new Date()

    return (
        <div className='orderPlace-Section'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className="service-details">
                              <img src={service.img} alt="" />
                              <h2>{service.name}</h2>
                              <p>{service.dis}</p>
                              <h3>{service.price}</h3>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="order-place-form">
                          <h2>Confirm Order</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("name")} defaultValue={user.displayName} placeholder='FullName' />  
               <input {...register("email")} value={user.email} placeholder='Email'/>
               <input {...register("address")}  placeholder='Address'   />
               <input {...register("product")}value={service.name} placeholder='Product Name'   />
               <input type="number" {...register("phone")} placeholder='Phone'   />
               <input {...register("date")} defaultValue={date.toLocaleDateString()}   />
               <input type="submit" value='Place Order' />
            </form>
                       
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default OrderPlace;