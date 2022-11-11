import { Button, Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const MyReview = () => {
    const {user,logOut} = useContext(AuthContext);
    const [mine,setMine] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://photography-server-anita-mahmud.vercel.app/reviews?email=${user?.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res=>{
          if (res.status === 401 || res.status === 403) {
            return logOut();
        }
        return res.json();
        })
        .then(data=>setMine(data))
        .catch(er=>console.log(er))
    },[user?.email,logOut])
 console.log(mine.length);
//delete
const handleDelete=(id)=>{
   fetch(`https://photography-server-anita-mahmud.vercel.app/reviews/${id}`,{
    method: 'DELETE',
   })
   .then(res => res.json())
                .then(data => {
                    const remaining = mine.filter(odr => odr._id !== id);
                        setMine(remaining);
                    if (data.deletedCount > 0) {
                        
                       toast.error('Successfully Deleted')
                        
                    }
                })
}
//edit
const handleEdit = id =>{
    navigate(`/review/edit/${id}`)
}

    return (
        <div>
            
            <Helmet>
                <meta charSet="utf-8" />
                <title>Review</title>
            </Helmet>
            <div className='my-10 mx-8'>
                <h2 className='text-7xl font-great font-semibold text-center'><span className='capitalize font-bold'>{user.displayName}</span>'s Review</h2>
            </div>

           {mine.length>0? <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            {
                mine.map(my=> <Card>
                        <div className="flex flex-col items-center">
                      {/* <img
                        className="mb-3 h-24 w-24"
                        src={my.image}
                        alt=""
                      /> */}
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
                        {my?.service_name}
                      </h5>
                      <span className="text-lg text-gray-500 dark:text-gray-400">
                      {my?.review}
                      </span>
                      <div className="mt-4 flex space-x-3 lg:mt-6">
                        <Button onClick={()=>handleEdit(my._id)}
                          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        Edit
                        </Button>
                        <Button onClick={()=>handleDelete(my._id)}
                          className="inline-flex items-center rounded-lg bg-red-600 py-2 px-4 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Delete
                        </Button>
                        
                      </div>
                    </div>
                   
                  </Card>)
            }
</div>
: 
<div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold text-center text-red-700'>No Reviews Added</h2>
            </div>
}
        </div>
    );
}

export default MyReview;