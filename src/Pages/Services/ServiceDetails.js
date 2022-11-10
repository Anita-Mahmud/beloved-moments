import { Card } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const {_id,name,image,price,description,rating,duration} = serviceDetails;
    return (
        <div className='grid grid-cols-1'>
           <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold text-center'>Details of - {name}</h2>
            </div>
            <div className="mx-auto mb-8">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={image}
    className="w-5/6 mx-auto"
  >
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {description}
    </p>
    <p className="text-xl font-bold text-gray-900 dark:text-white">
       Price: {price}/-
      </p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">
       Rating: {rating}
      </p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">
       Duration: {duration}
      </p>
  </Card>
</div>
        </div>
    );
};

export default ServiceDetails;