import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Layout/Main";
import Home from "../Component/Home/Home";
import Course from "../Component/Course/Course";
import CategoryCourse from "../Component/CategoryCourse/CategoryCourse";
import Payment from "../Component/Payment/Payment";
import Blog from "../Shared/Blog";
import SingleCard from "../Shared/Card/Card";
import BlogDetails from "../Shared/BlogDetails/BlogDetails";
import FAQ from "../Shared/FAQ/FAQ";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import PrivateRoute from "../Shared/PrivateRouter/PrivateRoute";

export const router =createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>},
        {path:'/course',element:<PrivateRoute><Course></Course></PrivateRoute>,loader: ()=>fetch('https://pro-edu-lilac.vercel.app/course/'),children:[
            {path:'/course',element:<CategoryCourse></CategoryCourse>, loader:()=>fetch(`https://pro-edu-lilac.vercel.app/course/05`)},
            {path:'/course/:id',element:<CategoryCourse></CategoryCourse>,
            loader:({params})=>fetch(`https://pro-edu-lilac.vercel.app/course/${params.id}`)
        },
        {path:'/course/buy/:id',element:<Payment></Payment>,
        loader:({params})=>fetch(`https://pro-edu-lilac.vercel.app/buycourse/${params.id}`)
        }
        ]},
        {path:'/blog',element:<PrivateRoute><Blog></Blog></PrivateRoute>,children:[
            {path:'/blog',element:<SingleCard></SingleCard>,loader: ()=>fetch(`https://pro-edu-lilac.vercel.app/blog`)},
            {path:'/blog/:id',element:<BlogDetails></BlogDetails>,
            loader:({params})=>fetch(`https://pro-edu-lilac.vercel.app/blog/${params.id}`)
        }
        ]},
        {path:'/faq',element:<PrivateRoute><FAQ></FAQ></PrivateRoute>},
        {path:'/signin',element:<SignIn></SignIn>},
        {path:'/signup',element:<SignUp></SignUp>}

    ]}
])