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
import AdminLayout from "../Layout/AdminLayout";
import AllSeller from "../Page/Dashboard/Admin/AllSeller/AllSeller";
import AddProduct from "../Page/AddProduct/AddProduct";
import ProductsFilterBars from "../Page/AllProducts/ProductsFilterBars/ProductsFilterBars";
import ProductCategory from "../Page/AllProducts/ProductCategory/ProductCategory";
import Categoryproduct from "../Page/AllProducts/ProductCategory/Categoryproduct";

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
                path:'/admin',
                element: <PrivateRoute><AdminLayout/></PrivateRoute>,
                children: [
                    {
                        path:'/admin/user',
                        element:<AllSeller/>,
                        loader: () => fetch('http://localhost:5000/users')
                    },
                    {
                        path:'/admin/addproduct',
                        element:<AddProduct/>
                    },
                    
                ]
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
                path:'/product/category',
                element: <ProductCategory/>,
                children:[
                    {
                        path:'/product/category/:id',
                        element: <Categoryproduct/>
                    }
                ]
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