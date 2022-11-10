import React from 'react';
import about from '../../images/about.jpeg';
const About = () => {
    return (
        <div className='max-w-screen-xl mx-8'>
           <div className='my-14 '>
                <h2 className='text-5xl font-great font-semibold'>Why choose me?</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-200 mx-auto items-center '>
            <div >
            <img src={about} alt="about" className='w-5/6  mx-auto'></img>
            </div>
            <div className='py-10 mx-auto md:-ml-4'>
            <ul className="list-disc list-inside font-semibold text-2xl font-satisfy">
            <li>Professional</li>
            <li>Certified</li>
            <li>Perfectionist</li>
            <li>Unique Vision</li>
            <li>Perfect Angle</li>
  
</ul>
            </div>
            </div>
        </div>
    );
};

export default About;