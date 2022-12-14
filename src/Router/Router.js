import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import EditReview from "../Pages/Review/EditReview";
import MyReview from "../Pages/Review/MyReview";
import AddService from "../Pages/Services/AddService";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://photography-server-anita-mahmud.vercel.app/services')
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('https://photography-server-anita-mahmud.vercel.app/all/services')
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`https://photography-server-anita-mahmud.vercel.app/services/${params.id}`)
            },
            {
                path:'/add/service',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
                
            },
            {
                path:'/review',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'review/edit/:id',
                element:<EditReview></EditReview>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }


        ],
    },
    {
        path: '/login',
        element:<Login></Login>
    },
    {
        path: '/register',
        element:<Register></Register>
    }
]);