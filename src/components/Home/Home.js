import React from 'react';
import useTitle from '../../hooks/useTitle';
import About1 from './About/About1';
import About2 from './About/About2';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <About1></About1>
            <About2></About2>
            <Services></Services>
        </div>
    );
};

export default Home;