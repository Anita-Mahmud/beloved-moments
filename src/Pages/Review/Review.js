import { Button, Card, Label, Select, Textarea, TextInput} from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Review = ({serviceDetails}) => {
    
    const [reviews,setReviews] = useState([]);
    const {user} = useContext(AuthContext);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=>res.json())
        .then(data=>{
            const rev = data.filter(review=>review.service_id===serviceDetails.service_id);
            setReviews(rev);
        })
    },[serviceDetails]);
    console.log(reviews);
    const handleReview = event =>{
      event.preventDefault();
      const form = event.target;
      const service_id = serviceDetails.service_id;
      const service_name = serviceDetails.service_name;
      const name = user.displayName;
      const image = user.photoURL;
      const email = user.email;
      const review = form.review.value;
      const rating = form.rating.value || ' ';
      const reviews = {
        service_id,
        service_name,
        name,
        image,
        email,
        review,
        rating
      }
      fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(reviews)
      })
      .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
                    form.reset();
                    
                }
            })
      .catch(er => console.error(er));
    }
    return (
        <div>
         
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold text-center'>Reviwes of -{serviceDetails.name} </h2>
            </div>
            <div className=''>
                {
                    reviews.map(revi=>
                    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-lg shadow-zinc-700">
                    <div className="flex justify-between p-4">
                      <div className="flex space-x-4 items-center">
                        <div>
                          <img src={revi.image}alt="" className="object-cover w-24 h-24 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">{revi.name}</h4>
                         
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 dark:text-yellow-500">
                        
                        <span className="text-xl font-bold ">Rating:<span className='text-yellow-400'> {revi.rating}</span></span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2 text-xl dark:text-gray-400">
                      <p>{revi.review}</p>
                    </div>
                  </div>)
                    
                }
            </div>
            <div>
            {user?.uid?
             <>
             <div id="textarea mx-auto">
             <div className='my-14 mx-8'>
                <h2 className='text-5xl font-great font-semibold text-center'>Your Review</h2>
            </div>
 <form onSubmit={handleReview}>
 <Textarea
  className='w-9/12 mx-auto'
    id="comment"
    name="review"
    placeholder="Leave your review..."
    required={true}
    rows={4}
  />
  <div id="select ">
  <div className='w-9/12 mx-auto my-4'>
    <Label
      htmlFor="countries"
      value="Rating:"
    />
  </div>
  <Select className='w-9/12 mx-auto'
  name='rating'
    // required={true}
  >
    <option>
     
    </option>
    <option>
      1
    </option>
    <option>
      2
    </option>
    <option>
     3
    </option>
    <option>
      4
    </option>
    <option>
      5
    </option>
  </Select>
</div>
   <div className='w-9/12 mx-auto my-2'>
    <Button className='px-6' type='submit'>
      Review
    </Button>
  </div>
 </form>
</div>
           </>
            :
            <div className='text-center mt-6 text-2xl font-semibold'>
              <h5>Please <Link to='/login' className='font-bold text-blue-700'>Log in </Link> to add your review</h5>
            </div>
            }
            
            </div>

        </div>
    );
};

export default Review;