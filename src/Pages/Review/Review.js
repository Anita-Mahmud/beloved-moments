import { Card } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Review = ({serviceDetails}) => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=>res.json())
        .then(data=>{
            const rev = data.filter(review=>review.service_id===serviceDetails.service_id);
            setReviews(rev);
        })
    },[serviceDetails]);
    console.log(reviews);
    return (
        <div>
         
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold text-center'>Reviwes of -{serviceDetails.name} </h2>
            </div>
            <div className=''>
                {
                    reviews.map(revi=><div className="max-w-lg mx-auto">
                    <Card >
                      
                      <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                          <li className="py-3 sm:py-4 mx-auto">
                            <div className="flex items-center space-x-4">
                              <div className="shrink-0">
                                <img
                                  className=" w-40  rounded"
                                  src={revi.image}
                                  alt={revi.name}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                {revi.name}
                                </p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                Rating:{revi.rating}
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                              {revi.review}
                              </div>
                            </div>
                          </li>
                          
                        </ul>
                      </div>
                    </Card>
                  </div>)
                    
                }
            </div>
        </div>
    );
};

export default Review;