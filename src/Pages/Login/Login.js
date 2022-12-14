import { GoogleAuthProvider } from 'firebase/auth';
import { Spinner } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import {Helmet} from "react-helmet";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import photo from '../../images/photo.png'
const Login = () => {
	const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
	const [error,setError] = useState(false);
	const {googleAuthProvider,logIn,loading} = useContext(AuthContext);
	if(loading){
		return <div className='text-center'>
		 <Spinner
		aria-label="Large spinner example"
		size="lg"
	  />
		</div>
	 }
	const googleProvider = new GoogleAuthProvider();
	//google
	const handleGoogleSignIn=()=>{
		googleAuthProvider(googleProvider)
		.then(result=>{
			const user = result.user;
			navigate(from, {replace: true});
            
		})
		.catch(er=>setError(true));
	}
	//LOGIN
    const handleLogin = event =>{
        event.preventDefault();
		const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
		logIn(email,password)
		.then(result => {
			const user = result.user;


			const currentUser = {
				email: user.email
			}

			console.log(currentUser);

			// get jwt token
			fetch('https://photography-server-anita-mahmud.vercel.app/jwt', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(currentUser)
			})
				.then(res => res.json())
				.then(data => {
					console.log(data);
					localStorage.setItem('token', data.token);
					navigate(from, { replace: true });
				});
			
		})
		.catch(error => setError(true));
		
	}
    return (
        <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
            <div >
             <img src={photo} alt="" />
            </div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto mb-2">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="email" className="block dark:text-gray-400">Email</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400 bg-pink-500 text-white" type='submit'>Sign in</button>
	</form>
	<div className='text-xl text-red-700'>
		{error && <p>Credentials donot match. </p>}
	</div>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current ">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
		<Link to='/register' className="underline dark:text-gray-100">Sign up</Link>
	</p>
</div>
        </div>
        </div>
    );
};

export default Login;