import React, { useEffect, useState } from 'react';
import ServiceCard1 from '../ServiceCards/ServiceCard1';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Service.css'
import { CircularProgress, Container, Grid } from '@mui/material';
const Service = () => {

const [user,setUser]=useState([])
   useEffect(()=>{
       fetch(`https://floating-shore-46558.herokuapp.com/services`)
       .then(response=>response.json())
       .then(data=>setUser(data.slice(0,8)))
   },[])

   const [user2,setUser2]=useState([])

   useEffect(()=>{
    fetch(`https://floating-shore-46558.herokuapp.com/services`)
    .then(response=>response.json())
    .then(data=>setUser2(data.slice(8,16)))
},[])
   const [user3,setUser3]=useState([])

   useEffect(()=>{
       fetch(`https://floating-shore-46558.herokuapp.com/services`)
       .then(response=>response.json())
       .then(data=>setUser3(data.slice(13,21)))
   },[])


return (
<Tabs>
<div style={{backgroundColor:'black'}}>
<Container>
<div className="servise-text" data-aos="fade-down" data-aos-duration="1700">
<div className='service-title' >
   <h1>OUR BEST MENUES</h1>
   <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br />  Aenean.eget dolor.  Aenean.</p>
</div>

<div className='tabs'>
<TabList>
<Tab>food</Tab>
<Tab>snack</Tab>
<Tab>Beverage</Tab>
</TabList>
</div>


</div>
<TabPanel>
{user.length===0?<CircularProgress  sx={{display:'block',margin:'auto'}}/>:
<Grid container spacing={{ xs: 2, md: 3 }} >
{
user.map((x)=><ServiceCard1 key={x._id} card={x} />)
}
</Grid>}
</TabPanel>

<TabPanel>
{user.length===0?<CircularProgress  sx={{display:'block',margin:'auto',marginTop:'14px'}}/>:
<Grid container spacing={2}>
{
user2.map((x)=><ServiceCard1  key={x.id}  card={x} />)
}
</Grid>}
</TabPanel>  
<TabPanel>
{user.length===0?<CircularProgress  sx={{display:'block',margin:'auto',marginTop:'14px'}}/>:
<Grid container spacing={2}>
{
user3.map((x)=><ServiceCard1  key={x.id}  card={x} />)
}
</Grid>}
</TabPanel>  



</Container>

</div>

</Tabs>


    );
};

export default Service;