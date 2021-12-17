import { Button, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
     const [allOrders,setAllOrders]=useState([])
     const [approve,setApprove]=useState(false)
    useEffect(()=>{
        fetch(`https://floating-shore-46558.herokuapp.com/orders`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[approve])
     
  const deleteFunctions=(id)=>{
      const confirm=window.confirm(`are you sure? you want to delete?`)
      if(confirm){
        fetch(`https://floating-shore-46558.herokuapp.com/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                swal("Good Job", "Order  Successfully Deleted", "success")
               const reminningOrder=allOrders.filter((x)=>x._id !== id)
               setAllOrders(reminningOrder)
            }
        })
      }
   
  }



   const approveFunction=(id)=>{
       fetch(`https://floating-shore-46558.herokuapp.com/orders/${id}`,{
           method:'put',
           headers: {
            'Content-Type': 'application/json'
          },
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.modifiedCount>0){
            setApprove(true)
            swal("Good Job", "order successfully Approved", "success");
           
           }
       })
   }
   setTimeout(() => {
    setApprove(false)
   }, 1000);


    return (
        <div>
          <Grid container spacing={2}>
           {
            allOrders.map((x)=><Grid item xs={12} md={4}>
            <div className='all-Order-box'  data-aos="zoom-in" data-aos-duration="1000">
                <div className='order-box-img'>
                    <img src={x.img} alt="" />
                </div>
                <div className='Order-box-description'>
                    <span>Name: {x.name}</span> <br />
                    <span>Email: {x.email}</span><br />
                    <span>Address: {x.address}</span><br />
                    <span>Product: {x.product}</span><br />
                    <span>Phone: {x.phone}</span><br />
                    <span>Date: {x.date}</span><br />
                    <span>Price: {x.price}</span><br />
                    <span>Status: {x.status}</span>
                    <div className='approve-delete-btn'>
                        <Button onClick={()=>deleteFunctions(x._id)} variant="contained">Delete</Button>
                        <Button onClick={()=>approveFunction(x._id)} variant="outlined">Approve</Button>
                    </div>
                </div>
            </div>
        </Grid>)
           }
            
          </Grid>
        </div>
    );
};

export default ManageAllOrders;