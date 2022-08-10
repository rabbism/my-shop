import React from 'react';
import Footer from '../component/Footer/Footer';
import Header from '../component/Home/Header';
import Slider from '../component/Home/Slider';
import NavBar from '../component/Shaired/NavBar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
<Slider></Slider>
            <Footer></Footer>
        </div>
    );
};

export default Home;