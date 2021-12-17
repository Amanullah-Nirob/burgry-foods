import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import {  Button, Container, Grid } from '@mui/material';
import './MyOrder.css'
import swal from 'sweetalert';
const MyOrders = () => {
const {user}=UseAuth()
const [orders,setOrders]=useState([])

  useEffect(()=>{
      fetch(`https://floating-shore-46558.herokuapp.com/orders/${user.email}`)
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[user.email])

const deleteFunction=(id)=>{
const confirm=window.confirm(`are you sure? you want delete`)
        if(confirm){
            fetch(`https://floating-shore-46558.herokuapp.com/orders/${id}`,{
                method: 'DELETE',
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    swal("", "your order successfully deleted", "success");
                    const remainingOrder=orders.filter((x)=>x._id!==id)
                    setOrders(remainingOrder)
                }
            })
        }
  

}

const confirmOrder=(price,product,img)=>{
   const order={
    total_amount:price,
    product_name:product,
    product_img:img,
    cus_name:user.displayName,
    cus_email:user.email,
}
fetch(`https://floating-shore-46558.herokuapp.com/init`,{
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(order)
})
.then(res=>res.json())
.then(data=>{
    window.location.replace(data)
})

}



    return (
        <Container>
      
             <Grid container spacing={3}>
                 {
                    orders?.map((x)=> <Grid item xs={12} md={4}>
                    <div className='myOrder-box'>
                        <div className='myOrder-Box-img'>
                            <img src={x.img} alt="" />
                          <h3>Product: {x.product}</h3>
                          <h4>Quantity: {x.count}</h4>
                          <h4>Price: {x.price}$</h4>
                          <p>Name: {x.name}</p>
                          <p>Email: {x.email}</p>
                          <p>Address: {x.address}</p>
                          <p>Date: {x.date}</p>
                          <p>Status: {x.status}</p>
                        

                         <div className='order-delete-btn'>
                         <Button  onClick={()=>deleteFunction(x._id)} variant="outlined" sx={{color:"#fff"}}> DELETE</Button>
                          <Button onClick={()=>confirmOrder(x.price,x.product,x.img)} variant="contained">Pay Online</Button>
                         </div>

                        </div>
                    </div>
               </Grid>) 
                 }
             </Grid>
      
        </Container>
    );
};

export default MyOrders;