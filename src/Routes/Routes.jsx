import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllProducts from "../Page/AllProducts/AllProducts/AllProducts";
import Home from "../Page/Home/Home/Home";
import SingleProducts from "../Page/AllProducts/SingleProducts/SingleProducts";
import Page404 from "../Page/Page404/Page404";
import Login from "../Page/Authentication/LogIn/Login";
import SignUp from "../Page/Authentication/SingUp/SignUp";
import Cart from "../Page/Cart/Cart";
import UserDashboard from "../Page/Dashboard/UserDashboard/UserDashboard";
import PrivateRoute from "./PrivateRoute";

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
                path:'/cart',
                element:<PrivateRoute><Cart/></PrivateRoute>,
            },
            {
                path:'/profile',
                element: <PrivateRoute><UserDashboard/></PrivateRoute>
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
                path:'/product/:id',
                element: <PrivateRoute><SingleProducts/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
            }
        ]
    }

])

export default router;