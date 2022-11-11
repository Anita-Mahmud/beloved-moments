import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import SingleService from './SingleService';

const Services = () => {
    const services = useLoaderData();
    const {loading}=useContext(AuthContext);
    if(loading){
       return <div className='text-center'>
        <Spinner 
       aria-label="Large spinner example"
       size="lg"
     />
       </div>
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Services</title>
            </Helmet>
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold'>All Services</h2>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10">
        {
            services.map(service=><SingleService
            key={service._id}
            service={service}
            ></SingleService>)
        }
        </div>
        </div>
        
    );
};

export default Services;