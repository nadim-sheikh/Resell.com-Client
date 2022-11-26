import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const UserDashboard = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className='my-10 mx-5 md:mx-20 lg:mx-[100px]'>
            <div className='flex pb-5 flex-col bg-gray-100 rounded-md justify-center items-center lg:w-[50%] w-full md:w-[50%] mx-auto border-2'>
                <div className='rounded-full w-[200px] my-5'>
                <img src={user?.photoURL} alt="" />
                </div>
                <div>
                    <h1 className='lg:text-3xl text-xl text-center'>{user?.displayName}</h1>
                    <p className='text-center'>Email: {user?.email}</p>
                </div>
                <Link to='/cart'><button className='my-5 py-2 px-5 bg-[#1185de] text-white rounded-md'>My Orders</button></Link>
            </div>
        </div>
    );
};

export default UserDashboard;