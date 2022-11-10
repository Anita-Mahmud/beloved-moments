import React from 'react';
import { Link } from 'react-router-dom';
import reg from '../../images/camera.jpg'
const Register = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div >
         <img src={reg} alt="" className='w-full'/>
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto mb-2">
<h1 className="text-2xl font-bold text-center">Register</h1>
<form  novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
    <div className="space-y-1 text-sm">
        <label for="username" className="block dark:text-gray-400">Full Name</label>
        <input type="text" name="username" id="username" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
        <label for="photoURL" className="block dark:text-gray-400">Photo URL</label>
        <input type="text" name="photoURL" id="photoURL" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
        <label for="email" className="block dark:text-gray-400">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
    </div>
    <div className="space-y-1 text-sm">
        <label for="password" className="block dark:text-gray-400">Password</label>
        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
        
    </div>
    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 bg-pink-500 text-white">Sign up</button>
</form>

<p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
    <Link to='/login' className="underline dark:text-gray-100">Sign in</Link>
</p>
</div>
    </div>
    );
};

export default Register;