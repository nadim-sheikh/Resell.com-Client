import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AdminLayout = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='custom-css2 mx-5 md:mx-20 lg:mx-[100px] my-10'>
            <div className='border-2 mr-10'>
                <div className='flex pb-5 flex-col items-center px-5'>
                    <div className='rounded-full w-[200px] my-5'>
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <div>
                        <h1 className='lg:text-3xl text-xl text-center'>{user?.displayName}</h1>
                        <p className='text-center'>Email: {user?.email}</p>
                    </div>
                    <Link to='/admin/addproduct' className='mt-5 mb-5 w-full py-2 px-5 bg-[#1185de] text-white rounded-md text-center'>Add Product</Link>   
                    <Link to='/admin/allseller' className='text-center mb-5 w-full py-2 px-5 bg-[#1185de] text-white rounded-md'>All Seller</Link>   
                    <Link to='/admin/allbuyer' className='text-center mb-5 w-full py-2 px-5 bg-[#1185de] text-white rounded-md'>All Buyer</Link>

                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;