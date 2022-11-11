import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {
    const navigate = useNavigate();
    const handleSubmit = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const services = {
            name,
            image,
            price,
            description,
            duration
        }
        fetch('https://photography-server-anita-mahmud.vercel.app/services',{
        method:'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(services)
      })
      .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                  //setLoading(true);
                  navigate('/');
                  toast.info('Added Successfully')
                    form.reset();
                    
                }
            })
      .catch(er => console.error(er));
    }
    
    return (
        <div className='max-w-screen-md mx-auto mb-6'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service</title>
            </Helmet>
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold'>Add Your Services</h2>
            </div>
            <form onSubmit={handleSubmit} novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div className=''>
					<label for="name" className="text-lg">Service name</label>
					<input id="name" name="name" type="text" placeholder="Service name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="lastname" className="text-lg ">Image Link</label>
					<input id="lastname" type="text" name="image"  placeholder="URL" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="price" className="text-lg">Price</label>
					<input id="price" type="text" name="price"  placeholder="Price" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div>
					<label for="description" className="text-lg">Description</label>
					<input id="description" type="text" name="description"  placeholder="Description" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				
				<div>
					<label for="duration" className="text-lg">Duration</label>
					<input id="duration" type="text" name="duration"  placeholder="Duration" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<button type="submit" className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-blue-600 text-white">Add</button>
			</form>
        </div>
    );
};

export default AddService;