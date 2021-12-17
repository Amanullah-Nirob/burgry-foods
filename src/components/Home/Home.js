import React from 'react';
import AboutSimple from './AboutSimple';
import Articles from './Articles/Articles';
import BackgroundVideo from './BackgroundVideo/BackgroundVideo';
import Borocard from './Borocard';
import Downloads from './Download/Downloads';
import './Home.css'
import MainHome from './MianHome/MainHome';
import Reservation from './Reservation/Reservation';
import Reviews from './Reviews/Reviews';
import Service from './service/Service';
import Simplefoodcard from './Simplefoodcard';
import Subscribe from './subscribe/Subscribe';

import Footer from '../Footer/Footer'
const Home = () => {
        return (
        <div>
               <MainHome></MainHome>
            <Simplefoodcard></Simplefoodcard>
            <Borocard></Borocard>
            <AboutSimple></AboutSimple>
            <Service></Service>
            <BackgroundVideo></BackgroundVideo>
            <Downloads></Downloads>
 <Reviews></Reviews>
 <Reservation></Reservation>
<Articles></Articles>
<Subscribe></Subscribe>
<Footer></Footer>
        </div>
        );
};

export default Home;