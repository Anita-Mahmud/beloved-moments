import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const SingleService = ({service}) => {
    const {_id,name,image,description,rating,price} = service;
    return (
        <div className="max-w-screen-xl mb-8">
  <Card
    // imgAlt={name}
    // imgSrc={image} 
  >
    <PhotoProvider>
     
       
          <PhotoView key={_id} src={image}>
            <img src={image} alt="" className='w-full h-80'/>
          </PhotoView>
      
    </PhotoProvider>
    <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
    <h5 className="text-sm tracking-tight text-gray-900 dark:text-white">
        {description.length>50?description.slice(0,70)+"...": description}
      </h5>
    <div className="mt-2.5 mb-5 flex items-center">
      {/* <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg> */}
     
      <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5  text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
       Ratings: {rating}
      </span>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        {price}/-
      </span>
      <Link
        to={`/services/${_id}`}
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl shadow-indigo-500/50"
      >
        Details
      </Link>
    </div>
  </Card>
  
</div>
    );
};

export default SingleService;