import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../Services/SingleService';
import Slider from './Slider';

const Home = () => {
    const homeService = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Slider></Slider>
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold'>Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
            {
                homeService.map(home=><SingleService
                key={home._id}
                service={home}
                ></SingleService>)
            }
            </div>
           
        </div>
    );
};

export default Home;