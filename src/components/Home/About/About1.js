import React from 'react';
import p1 from '../../../assets/images/about/p1.jpg';
import p2 from '../../../assets/images/about/p2.jpg';

const About1 = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2'>
          <img src={p1} alt=""  className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={p2}  alt="" className="absolute border-8 right-5 top-1/2 w-3/5 rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <p className=' text-2xl font-bold text-orange-600'>About Us</p>
            <h1 className="my-5 text-5xl font-bold">We are qualified <br />
             & of experience <br/>
             in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomised words which don't look even slightly believable.</p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About1;