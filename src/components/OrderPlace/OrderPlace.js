import { Container, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useParams,useNavigate } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './OrderPlace.css'
import { useForm } from "react-hook-form";
import swal from 'sweetalert';


const OrderPlace = () => {
    const navigate=useNavigate()
    const {user}=UseAuth()
    const {kam}=useParams()
    const [service,setService]=useState({})
    const date=new Date()
    const [count,setCount]=useState(1)
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
       data.count=count
      data.img=service.img
      data.price=service.price * count
      data.status='pending'
     

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
            navigate('/dashboard/MyOrders')
        }

    })
   
   }


    return (
        <div className='orderPlace-Section'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className="service-details">
                              <img src={service.img} alt="" />
                           <div className='descriptions'>
                           <h2>{service.name}</h2>
                              <p>{service.dis}</p>
                           </div>

                           <div className='quantity'>
                           <h3>${service.price * count}</h3>
                              <div className='main-quantity'>
                              <button onClick={()=>setCount(count-1)} disabled={count<=1?true:false}><img src='https://i.ibb.co/Wzp6LYp/download-1-removebg-preview.png' alt='' /></button>
                              <h3>{count}</h3>
                              <button onClick={()=>setCount(count+1)}><img src='https://i.ibb.co/bs6FV4k/images-2-removebg-preview.png' alt='' /></button>

                              </div>
                           </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="order-place-form">
                          <h2>Delivery Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("name")} defaultValue={user.displayName} placeholder='FullName' />  
               <input {...register("email")} value={user.email} placeholder='Email'/>
               <input {...register("address")}  placeholder='Address'   />
               <input {...register("product")}value={service.name} placeholder='Product Name'   />
               <input type="number" {...register("phone")} placeholder='Phone'   />
               <input {...register("date")} defaultValue={date.toLocaleDateString()}   />
               <input type="submit" value='Submit' />
            </form>
                       
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default OrderPlace;