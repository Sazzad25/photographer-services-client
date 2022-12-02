import React from 'react';
import p3 from '../../../assets/images/about/p3.jpg';
import p4 from '../../../assets/images/about/p4.jpg';

const About2 = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2'>
          <img src={p3} alt=""  className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={p4}  alt="" className="absolute border-8 right-5 top-1/2 w-3/5 rounded-lg shadow-2xl" />
          </div>
          <div className='w-1/2'>
            <p className=' text-2xl font-bold text-orange-600'>About Us</p>
            <h1 className="my-5 text-5xl font-bold">WHAT IT IS <br />
            & AND WHY YOU <br/>
            NEED IT</h1>

            <p className="py-6">The demand for Photographers in the world today is unparalleled, any type of event requires one or more skilled photographers.</p>
            <p className='py-6'>Because photographers can take much better pictures than the average camera user, the role of a skilled photographer is immense in making.</p>
            {/* <button className="btn btn-primary">Get More Info</button> */}
          </div>
        </div>
      </div>
    );
};

export default About2;