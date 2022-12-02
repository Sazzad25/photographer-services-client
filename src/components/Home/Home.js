import React from 'react';
import { Link } from 'react-router-dom';
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
            <Services></Services>
            <div>
            <Link to='/myreviews'>
            <button className="btn btn-primary mt-3 mb-3">See All</button>
            </Link>
            <About2></About2>
            </div>
        </div>
    );
};

export default Home;