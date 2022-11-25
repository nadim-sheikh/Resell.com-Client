import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllProducts from "../Page/AllProducts/AllProducts/AllProducts";
import Home from "../Page/Home/Home/Home";
import SingleProducts from "../Page/AllProducts/SingleProducts/SingleProducts";
import Page404 from "../Page/Page404/Page404";
import Login from "../Page/Authentication/LogIn/Login";
import SignUp from "../Page/Authentication/SingUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Page404 />,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/product',
                element: <AllProducts/>
            },
            {
                path:'/hi',
                element: <SingleProducts/>
            }
        ]
    }

])

export default router;