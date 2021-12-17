import { Container, Grid } from '@mui/material';
import React, { useRef } from 'react';
import swal from 'sweetalert';
import './AddProducts.css'
const AddProducts = () => {
    const nameRef=useRef()
    const imgRef=useRef()
    const dicRef=useRef()
    const priceRef=useRef()

    
  const formSubmit=(e)=>{
    e.preventDefault()
const img=imgRef.current.value;
const name=nameRef.current.value;
const dis=dicRef.current.value;
const price=priceRef.current.value;

const newProduct={img,name,dis,price}

fetch(`https://floating-shore-46558.herokuapp.com/services`,{
    method:"post",
    headers: {
      'Content-Type': 'application/json' 
    },
    body:JSON.stringify(newProduct) 
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        swal("Good Job", "your Product successfully added", "success");
        e.target.reset()
    }
})

}

    return (
        <div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                    <div className="add-product-form">
                          <div className='add-product-form-title'>
                              <h2>Add a New Product</h2>
                          </div>
                      <form onSubmit={formSubmit}>
                             <input ref={nameRef} type="text" placeholder='Product Name' />
                             <input ref={imgRef}  type="text" placeholder='Product Image URL' />
                             <input ref={priceRef}  type="number" placeholder='Price' />
                             <input ref={dicRef}  type="text" placeholder='Product Description' />   

                             <input type="submit" value="Submit" />  
                         </form>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='addProduct-img'>
                            <img src="https://i.ibb.co/1bM1t7r/4866232-removebg-preview.png" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default AddProducts;