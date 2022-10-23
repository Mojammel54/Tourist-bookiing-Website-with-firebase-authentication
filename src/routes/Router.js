import About from "../components/About/About";
import Book from "../components/bookdata/Book";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Pack from "../components/Packages/Pack";
import Register from "../components/Register/Register";
import Singlepage from "../components/singlePage/Singlepage";
import Main from "../layout/Main";
import PrivateRoute from "./Private/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <h1>error</h1>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://srver-tourist.vercel.app/')
            },

            {

                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://srver-tourist.vercel.app/')

            },
            {

                path: '/single/:id',
                element: <Singlepage></Singlepage>,
                loader: ({ params }) => fetch(`https://srver-tourist.vercel.app/categories/${params.id}`)



            },

            {

                path: '/about',
                element: <About></About>
            },
            {

                path: '/book',
                element: <PrivateRoute><Book></Book></PrivateRoute>,
                loader: () => fetch('https://srver-tourist.vercel.app/hotel')

            },
            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/register',
                element: <Register></Register>
            },










        ]


    }






])