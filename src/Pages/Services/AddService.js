import React from 'react';
import { Helmet } from 'react-helmet';

const AddService = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service</title>
            </Helmet>
            <div className='my-10 mx-8'>
                <h2 className='text-5xl font-great font-semibold'>Add Your Services</h2>
            </div>
        </div>
    );
};

export default AddService;