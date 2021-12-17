import { Button, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import './ManageAllProducts.css'


const ManageAllProducts = () => {
   const [allProduct,setAllProduct]=useState([])

    useEffect(()=>{
        fetch(`https://floating-shore-46558.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    },[])

  const deleteFunction=(id)=>{
const confirm=window.confirm(`are you sure? you want to delete?`)
if(confirm){
    fetch(`https://floating-shore-46558.herokuapp.com/services/${id}`,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(res=>res.json())
    .then(data=>{
        if(data.deletedCount>0){
            swal("Good Job", "your product successfully deleted", "success");
       const reminningProduct=allProduct.filter((x)=>x._id !== id)
       setAllProduct(reminningProduct)
        }
    })

}
   
  }

    return (
        <Container className='manage-all-products'>
            <Grid container spacing={2}>
                {
                    allProduct.map((x)=><Grid item xs={6} md={3}>
                    <div className="single-card" data-aos="fade-up" data-aos-duration="1000" >
                    <div>
                            <div >
                    
                    <div className='enter-card'>
                    <div className='card-img-area a'>
                              <img alt='' id='card-img' src={x.img} />
                              </div>
                    </div>
                              <div className='service-card-text'>
                                <div><h3>{x.name}</h3></div>
                                <div>
                                <p>{x.dis}</p>
                            <div className="price-and-link">
                            <h5>${x.price}</h5>
                            <Button onClick={()=>deleteFunction(x._id)} variant="outlined">DELETE</Button>
                            </div>
                    </div>
                    </div> 
                              
                    
                            </div>
                    
                          </div>
                    
                    </div>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default ManageAllProducts;